<template>
    <section class="min-h-screen text-white py-20 px-6 flex flex-col items-center relative overflow-hidden">

        <!-- Fleurs animées -->
        <div v-for="flower in flowers" :key="flower.id" class="flower absolute z-0" :style="{
            top: flower.top,
            left: flower.left,
            width: flower.size,
            height: flower.size,
            animationDelay: flower.delay,
            animationDuration: flower.duration
        }">
            <img src="../assets/CUEJ/fleur.png" alt="Fleur" class="w-full h-full object-contain opacity-80" />
        </div>

        <!-- Titre -->
        <h1 class="text-5xl font-bold mb-12 text-center">Le projet CUEJ</h1>
        <!-- Présentation du projet -->
      <div class="max-w-5xl bg-purple-800/50 p-8 rounded-2xl shadow-xl mb-16">
  <h2 class="text-2xl font-semibold text-green-200 mb-4">🌾 Présentation</h2>
  <p class="text-gray-200 leading-relaxed">
    Le projet <strong>CUEJ</strong> a consisté à concevoir une expérience numérique originale mêlant 
    <strong>motion design</strong> et <strong>jeu interactif</strong>. Réalisé dans un cadre journalistique, 
    il avait pour objectif de rendre accessible un sujet complexe à travers une approche à la fois 
    <strong>ludique, immersive et pédagogique</strong>.
  </p>
  <p class="mt-4 text-gray-200 leading-relaxed">
    J’ai participé à la création des visuels, à la conception de l’univers graphique et à 
    l’intégration technique du jeu, en veillant à la cohérence entre le design, l’animation et la narration. 
    Ce projet m’a permis d’explorer concrètement la relation entre <strong>création visuelle</strong> et 
    <strong>développement interactif</strong>, tout en développant ma sensibilité à l’ergonomie et à 
    l’expérience utilisateur.
  </p>
</div>

        
        <!-- Planche tendance -->
        <div class="max-w-5xl text-center mb-20">
            <h2 class="text-2xl font-semibold text-green-200 mb-8">🎨 Planche tendance 🖌️</h2>
            <div class="flex justify-center"><img src="../assets/CUEJ/charte.png" alt="Planche tendance CUEJ"
                    class="rounded-xl shadow-lg w-90  object-cover" /></div>
        </div> <!-- Maquettes & CMS -->
        <div class="max-w-5xl grid md:grid-cols-2 gap-12 mb-20 items-center">
           <div>
  <h2 class="text-2xl font-semibold text-green-200 mb-4">🧩 Maquettes & CMS</h2>
  <p class="text-gray-200 leading-relaxed mb-4">
    Les maquettes ont été créées sur Figma puis intégrées dans un CMS développé sur mesure, combinant design,
    front-end et back-end pour offrir une expérience fluide aux journalistes.
  </p>
  <ul class="list-disc pl-6 text-gray-200 space-y-2">
    <li>Wireframes et prototypes sous Figma 🖌️</li>
    <li>Développement du CMS avec gestion complète des contenus 🧰</li>
    <li>PHP, Twig, HTML, SCSS, JavaScript et Bootstrap ⚙️</li>
    <li>Tests et ajustements pour une meilleure ergonomie 🧪</li>
  </ul>
  <p class="text-gray-200 leading-relaxed mt-4">
    Ce projet m’a permis d’approfondir mes compétences en intégration web et en développement de systèmes interactifs.
  </p>
</div>

            <div class="bg-purple-800/50 p-4 rounded-xl text-center border border-purple-700"> <img
                    src="../assets/CUEJ/Maquette.png" alt="Maquettes" class="rounded-lg shadow-md w-full" /> </div>
        </div> <router-link to="/" class="mt-8 text-gray-300 hover:text-green-300 transition"> ← Retour au portfolio
        </router-link>
    </section>
</template>

<script setup>
import { ref } from 'vue'

// 🌷 Fleurs positionnées manuellement
const flowers = ref([
    { id: 1, top: '3%', left: '75%', size: '120px', delay: '0s', duration: '6s' },
    { id: 2, top: '33%', left: '15%', size: '110px', delay: '2s', duration: '7s' },
    { id: 3, top: '90%', left: '30%', size: '70px', delay: '3s', duration: '9s' },
    { id: 4, top: '55%', left: '65%', size: '100px', delay: '4s', duration: '10s' },
])
</script>

<style scoped>
@keyframes bloom {
    0% {
        transform: scale(0) rotate(0deg);
        opacity: 0;
    }

    100% {
        transform: scale(1) rotate(360deg);
        opacity: 1;
    }
}

.flower {
    position: absolute;
    animation: bloom 8s ease-in-out infinite alternate;
    opacity: 0.8;
    pointer-events: none;
    /* laisse les clics passer au contenu */
}
</style>