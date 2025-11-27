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
      <img src="../assets/CUEJ/fleur.png" alt="Décoration florale" class="w-full h-full object-contain opacity-80" />
    </div>

    <!-- Titre -->
    <h1 class="text-5xl font-bold mb-12 text-center">Le projet CUEJ</h1>

    <!-- Présentation du projet -->
    <div class="max-w-5xl bg-purple-800/50 p-8 rounded-2xl shadow-xl mb-16">
      <h2 class="text-2xl font-semibold text-green-200 mb-4">🌾 Présentation</h2>

      <p class="text-gray-200 leading-relaxed">
        Le projet <strong>CUEJ</strong> consistait à créer une expérience numérique
        originale mêlant <strong>motion design</strong> et
        <strong>jeu interactif</strong>. Réalisé dans un cadre journalistique, il
        visait à rendre accessible un sujet complexe grâce à une approche à la fois
        <strong>ludique, immersive et pédagogique</strong>.
      </p>

      <p class="mt-4 text-gray-200 leading-relaxed">
        J’ai contribué à la création des visuels, à la conception de l’univers
        graphique ainsi qu’à l’intégration technique du jeu. Ce travail m’a permis
        de renforcer l’harmonie entre <strong>design</strong>,
        <strong>animation</strong> et <strong>narration</strong>, tout en développant
        ma sensibilité pour l’ergonomie et l’expérience utilisateur.
      </p>
    </div>

    <!-- Planche tendance -->
    <div class="max-w-5xl text-center mb-20">
      <h2 class="text-2xl font-semibold text-green-200 mb-8">
        🎨 Planche tendance 🖌️
      </h2>

      <div class="flex justify-center">
        <img src="../assets/CUEJ/charte.png" alt="Planche tendance CUEJ"
          class="rounded-xl shadow-lg w-90 object-cover" />
      </div>
    </div>

    <!-- Maquettes & CMS -->
    <div class="max-w-5xl grid md:grid-cols-2 gap-12 mb-20 items-center">
      <div>
        <h2 class="text-2xl font-semibold text-green-200 mb-4">🧩 Maquettes & CMS</h2>

        <p class="text-gray-200 leading-relaxed mb-4">
          Les maquettes ont été réalisées sous Figma, puis intégrées dans un CMS
          développé sur mesure. Le projet combinait design, front-end et back-end
          afin d’offrir une expérience fluide aux journalistes.
        </p>

        <ul class="list-disc pl-6 text-gray-200 space-y-2">
          <li>Wireframes et prototypes sous Figma 🖌️</li>
          <li>Développement d’un CMS complet et modulable 🧰</li>
          <li>Technos : PHP, Twig, HTML, SCSS, JavaScript, Bootstrap ⚙️</li>
          <li>Tests et ajustements UX pour améliorer l’ergonomie 🧪</li>
        </ul>

        <p class="text-gray-200 leading-relaxed mt-4">
          Ce projet m’a permis d’approfondir mes compétences en intégration web et
          en développement d’interfaces interactives.
        </p>
      </div>

      <div class="bg-purple-800/50 p-4 rounded-xl text-center border border-purple-700">
        <img src="../assets/CUEJ/Maquette.png" alt="Maquettes" class="rounded-lg shadow-md w-full" />
      </div>
    </div>

    <div class="text-center py-8  relative z-10">
      <router-link to="/" class="mt-12 text-purple-700 hover:text-blue-400 transition">
        ← Retour au portfolio
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

// 🌷 Positionnement des fleurs
const flowers = ref([
  { id: 1, top: "3%", left: "75%", size: "120px", delay: "0s", duration: "6s" },
  { id: 2, top: "33%", left: "15%", size: "110px", delay: "2s", duration: "7s" },
  { id: 3, top: "90%", left: "30%", size: "70px", delay: "3s", duration: "9s" },
  { id: 4, top: "55%", left: "65%", size: "100px", delay: "4s", duration: "10s" }
]);
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
  animation: bloom 8s ease-in-out infinite alternate;
  opacity: 0.8;
  pointer-events: none;
}
</style>
