<template>
  <section class="min-h-screen text-white py-20 px-6 flex flex-col items-center">
    <!-- Titre -->
    <h1 class="text-5xl font-bold text-orange-400 mb-8 text-center">La sobriété énergétique</h1>

    <!-- Contexte -->
    <div class="max-w-5xl bg-blue-900/40 p-8 rounded-2xl shadow-xl mb-16">
      <h2 class="text-2xl font-semibold mb-4">Contexte</h2>
      <p class="text-gray-200 leading-relaxed">
        Dans le cadre de ce projet, nous avons réalisé un site web one-page sur le thème de la sobriété numérique.
        L'objectif était de sensibiliser au réchauffement climatique tout en mettant en avant les alternatives possibles
        à la voiture thermique.
      </p>
      <p class="mt-4 text-gray-200 leading-relaxed">
        Pour expliquer au mieux ces enjeux, nous avons intégré un ensemble de données présentées sous forme de
        graphiques et d’infographies.
        Ces éléments visuels permettent d’illustrer de manière claire et pédagogique l’impact environnemental du
        numérique et de la mobilité,
        ainsi que les solutions existantes pour réduire notre empreinte carbone.
      </p>
    </div>

    <!-- Analyse de données -->
    <div class="max-w-5xl grid md:grid-cols-2 gap-12 mb-20 items-center">
      <div>
        <h2 class="text-2xl font-semibold mb-4">Analyse de données</h2>
        <ul class="list-disc pl-6 text-gray-200 space-y-2">
          <li>Recherche de sources fiables 📊</li>
          <li>Analyse et épuration des données 🧠</li>
          <li>Réalisation de calculs pour garantir la cohérence et la simplicité 🧮</li>
        </ul>
      </div>
      <div class="bg-blue-800/40 p-4 rounded-xl text-center border border-blue-700">
        <img src="../assets/SobEnergetique/donnees.png" alt="données">
      </div>
    </div>

    <!-- Illustrations -->
    <div class="max-w-5xl text-center mb-20">
      <h2 class="text-2xl font-semibold mb-8">Les illustrations</h2>
      <div class="flex justify-center items-center  px-4">
        <img src="../assets/SobEnergetique/illustrations.png" alt="illustrations sobriété énergétique"
          class="rounded-xl  shadow-lg" />
      </div>
    </div>

    <!-- Motion Design -->
    <div class="max-w-5xl text-center mb-20">
      <h2 class="text-2xl font-semibold mb-8">Le Motion Design</h2>
      <div class="flex justify-center items-center  px-4">
        <video src="../assets/SobEnergetique/motion2.mp4"
          class="rounded-xl border border-blue-700 shadow-lg w-full max-w-2xl object-cover" autoplay loop muted
          playsinline></video>
      </div>

    </div>

    <!-- Site Web -->
    <div class="max-w-5xl bg-blue-900/40 p-8 rounded-2xl shadow-xl mb-12">
      <h2 class="text-2xl font-semibold mb-4">Le site web</h2>
      <p class="text-gray-200 leading-relaxed">
        Le site regroupe des sections explicatives et visuelles présentant des solutions durables : le vélo, la voiture
        électrique, et l’adoption d’habitudes numériques plus sobres.
        Les animations et infographies renforcent l’aspect pédagogique et immersif.
      </p>
      <div class="text-center py-8  relative z-10">
        <router-link to="/" class="mt-12 text-purple-700 hover:text-blue-400 transition">
          ← Retour au portfolio
        </router-link>
      </div>

    </div>

    <router-link to="/" class="mt-8 text-gray-300 transition">
      ← Retour au portfolio
    </router-link>
  </section>
</template>

<script setup lang="ts"></script>
