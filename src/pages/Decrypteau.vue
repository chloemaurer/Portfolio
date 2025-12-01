<template>
  <section class="min-h-screen bg-[#001c3d] text-white py-20 px-6 flex flex-col items-center">
    <!-- Animation de pluie -->
    <div class="absolute inset-0 overflow-hidden z-0">
      <div v-for="i in 25" :key="i" class="raindrop" :style="{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${2 + Math.random() * 3}s`,
        transform: `scale(${0.6 + Math.random() * 0.8}) rotate(${Math.random() * 10 - 5}deg)`
      }"></div>
    </div>
    <!-- Titre -->
    <h1 class="text-5xl font-bold mb-8 text-center">Decrypt’eau</h1>

    <!-- Description -->
    <div class="max-w-4xl bg-blue-900/40 p-8 rounded-2xl shadow-xl mb-16 w-200">
      <p class="text-gray-200 leading-relaxed text-center">
        Dans ce projet, nous avons créé un jeu interactif pour la Maison de l’Alsace et de la Nature.
        Ce jeu permet de comprendre le cycle de l’eau de manière pédagogique, destiné à des enfants au collège ou au
        lycée.
        En plusieurs étapes, ils découvrent le grand cycle de l’eau et le petit, avec leurs utilisations, les risques et
        les polluants.
      </p>
    </div>

    <!-- Outils utilisés -->
    <div class="max-w-5xl mb-20 text-center">
      <h2 class="text-2xl font-semibold text-blue-200 mb-8">Outils utilisés 💧</h2>
      <div class="flex flex-wrap justify-center gap-8">
        <img src="../assets/Decrypteau/PHPstorm.png" alt="PhpStorm" class="w-16 h-16">
        <img src="../assets/Decrypteau/git.png" alt="Git" class=" h-16">
        <img src="../assets/Decrypteau/Gitlab.png" alt="GitLab" class="w-16 h-16">
        <img src="../assets/Decrypteau/SQLite.png" alt="SQLite" class="w-16 h-16">
        <img src="../assets/Decrypteau/Symfony.png" alt="Symfony" class="w-16 h-16">
      </div>
    </div>

    <!-- Langages utilisés -->
    <div class="max-w-5xl mb-16 text-center">
      <h2 class="text-2xl font-semibold text-blue-200 mb-8">Langages utilisés 🌍</h2>
      <div class="flex flex-wrap justify-center gap-8">
        <img src="../assets/Decrypteau/html.png" alt="HTML" class="w-16 h-16">
        <img src="../assets/Decrypteau/css.png" alt="CSS" class="h-16">
        <img src="../assets/Decrypteau/twig.png" alt="Twig" class="h-16">
        <img src="../assets/Decrypteau/php.png" alt="PHP" class="h-16">
        <img src="../assets/Decrypteau/bootstrap.png" alt="Bootstrap" class="w-16 h-16">
        <img src="../assets/Decrypteau/js.png" alt="JavaScript" class="h-16">
      </div>
    </div>

    <!-- Lien vers le site -->
    <div class="bg-blue-800/40 py-4 px-8 rounded-2xl text-center shadow-lg">
      <a href="https://decrypteau.maurerc.etu.mmi-unistra.fr/" target="_blank"
        class="text-blue-100 hover:text-blue-400 underline">
        🔗 https://decrypteau.maurerc.etu.mmi-unistra.fr/
      </a>
    </div>

    <div class="text-center py-8  relative z-10">
      <router-link to="/" class="mt-12 text-purple-700 hover:text-blue-400 transition">
        ← Retour au portfolio
      </router-link>
    </div>
  </section>
</template>

<script setup lang="ts" >
</script>

<style scoped>
/* --- Animation pluie --- */
.raindrop {
  position: absolute;
  top: -10%;
  width: 8px;
  height: 16px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(173, 216, 230, 0.5));
  border-radius: 50% 50% 60% 60% / 70% 70% 40% 40%;
  /* forme de goutte */
  opacity: 0.8;
  animation: fall linear infinite;
  filter: blur(0.4px);
}

/* effet de chute */
@keyframes fall {
  0% {
    transform: translateY(0) scale(1) rotate(0deg);
    opacity: 0.8;
  }

  90% {
    opacity: 1;
  }

  100% {
    transform: translateY(110vh) scale(0.9) rotate(3deg);
    opacity: 0;
  }
}
</style>