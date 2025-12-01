/*
declare module 'three/examples/jsm/loaders/FBXLoader.js' {
  import * as THREE from 'three';
  export class FBXLoader {
    constructor();
    load(
      url: string,
      onLoad: (object: THREE.Object3D & { animations?: THREE.AnimationClip[] }) => void,
      onProgress?: (xhr: any) => void,
      onError?: (error: any) => void
    ): void;
  }
}

declare module 'three/examples/jsm/controls/OrbitControls.js' {
  import * as THREE from 'three';
  export class OrbitControls {
    constructor(camera: THREE.Camera, domElement: HTMLElement);
    enableDamping: boolean;
    autoRotate: boolean;
    autoRotateSpeed: number;
    update(): void;
    dispose(): void;
  }
}
*/