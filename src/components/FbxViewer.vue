<template>
  <div ref="root" :style="{ width: width, height: height }" class="fbx-viewer relative">
    <div v-if="loading" class="absolute inset-0 flex items-center justify-center">
      <div class="text-sm text-gray-300">Chargement...</div>
    </div>
    <div v-if="error" class="absolute inset-0 flex items-center justify-center">
      <div class="text-sm text-red-400 bg-white/5 p-2 rounded">{{ error }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const props = defineProps({
  src: { type: String, required: true },          // ex: "/assets/unity/monmodele.fbx"
  width: { type: String, default: '100%' },       // ex: "100%" ou "400px"
  height: { type: String, default: '220px' },     // ex: "220px"
  autoRotate: { type: Boolean, default: true },
  initialScale: { type: Number, default: 0.01 }   // régler si ton modèle est trop gros/petit
});

const root = ref<HTMLElement | null>(null);
const loading = ref(true);
const error = ref<string | null>(null);

let scene: THREE.Scene | null = null;
let camera: THREE.PerspectiveCamera | null = null;
let renderer: THREE.WebGLRenderer | null = null;
let controls: OrbitControls | null = null;
let mixer: THREE.AnimationMixer | null = null;
let model: THREE.Object3D | null = null;
let rafId: number | null = null;
let resizeObserver: ResizeObserver | null = null;

function disposeAll() {
  if (rafId) cancelAnimationFrame(rafId);
  if (controls) {
    controls.dispose();
    controls = null;
  }
  if (renderer) {
    renderer.forceContextLoss();
    renderer.domElement?.remove();
    renderer.dispose();
    renderer = null;
  }
  if (scene) {
    scene.traverse((child) => {
      // @ts-ignore
      if (child.geometry) child.geometry.dispose?.();
      // @ts-ignore
      if (child.material) {
        if (Array.isArray(child.material)) {
          child.material.forEach((m:any) => m.dispose && m.dispose());
        } else {
          child.material.dispose && child.material.dispose();
        }
      }
    });
    scene = null;
  }
  model = null;
  mixer = null;
}

function fitCameraToObject(camera: THREE.PerspectiveCamera, object: THREE.Object3D, offset = 1.25) {
  const box = new THREE.Box3().setFromObject(object);
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());

  const maxSize = Math.max(size.x, size.y, size.z);
  const fitHeightDistance = maxSize / (2 * Math.atan(Math.PI * camera.fov / 360));
  const distance = fitHeightDistance * offset;

  camera.position.copy(center);
  camera.position.x += distance;
  camera.position.y += distance * 0.5;
  camera.position.z += distance;
  camera.lookAt(center);
  camera.updateProjectionMatrix();
}

onMounted(() => {
  if (!root.value) return;

  // Scene + camera + renderer
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0b0b0d);

  const widthPx = root.value.clientWidth || 400;
  const heightPx = root.value.clientHeight || 220;

  camera = new THREE.PerspectiveCamera(45, widthPx / heightPx, 0.1, 1000);
  camera.position.set(3, 2, 3);

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio || 1);
  renderer.setSize(widthPx, heightPx, false);
  renderer.outputEncoding = THREE.sRGBEncoding;

  root.value.appendChild(renderer.domElement);

  // Lights
  const hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
  scene.add(hemi);
  const dir = new THREE.DirectionalLight(0xffffff, 0.8);
  dir.position.set(5, 10, 7);
  scene.add(dir);

  // Controls
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.autoRotate = props.autoRotate;
  controls.autoRotateSpeed = 1.0;

  // Loader
  const loader = new FBXLoader();

  loading.value = true;
  error.value = null;

  loader.load(
    props.src,
    (object) => {
      model = object;
      // si animations
      if ((object as any).animations && (object as any).animations.length) {
        mixer = new THREE.AnimationMixer(object);
        (object as any).animations.forEach((clip:any) => mixer!.clipAction(clip).play());
      }

      // mise à l'échelle automatique
      object.scale.setScalar(props.initialScale);

      scene!.add(object);

      // recentrer / ajuster caméra
      try {
        fitCameraToObject(camera!, object, 1.4);
      } catch (e) {
        // ignore
      }

      loading.value = false;
    },
    (xhr) => {
      // progression (optionnel)
      // console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
    },
    (err) => {
      console.error('FBX load error', err);
      loading.value = false;
      error.value = 'Impossible de charger le modèle 3D (vérifie le chemin / CORS / version FBX).';
    }
  );

  // animation loop
  const clock = new THREE.Clock();
  const animate = () => {
    rafId = requestAnimationFrame(animate);
    const dt = clock.getDelta();
    if (mixer) mixer.update(dt);
    if (controls) {
      controls.update();
    }
    renderer!.render(scene!, camera!);
  };
  animate();

  // responsive
  resizeObserver = new ResizeObserver(() => {
    if (!root.value || !renderer || !camera) return;
    const w = root.value.clientWidth;
    const h = root.value.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  });
  resizeObserver.observe(root.value);
});

onBeforeUnmount(() => {
  if (resizeObserver && root.value) {
    resizeObserver.unobserve(root.value);
    resizeObserver = null;
  }
  disposeAll();
});

// react to src changes
watch(() => props.src, (newSrc) => {
  // simple reload page approach: full dispose + remount
  // to keep simple, reload window (or implement re-loader)
  // window.location.reload();
});
</script>

<style scoped>
.fbx-viewer {
  border-radius: 10px;
  background: linear-gradient(180deg, rgba(17,17,17,0.6), rgba(17,17,17,0.4));
  overflow: hidden;
}
</style>
