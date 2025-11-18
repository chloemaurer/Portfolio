<template>
  <section class="relative min-h-screen bg-gradient-to-br from-[#0b0b0d] to-[#1a1a2e] text-white py-20 px-6 flex flex-col items-center overflow-hidden">
    <!-- Donuts animés sur toute la page -->
    <div class="fixed inset-0 overflow-hidden z-0 pointer-events-none">
      <div
        v-for="(donut, index) in donuts"
        :key="index"
        class="donut absolute"
        :style="{
          top: donut.top,
          left: donut.left,
          width: donut.size,
          animationDuration: donut.speed,
          animationDelay: donut.delay,
        }"
      >
        <img src='../assets/DouxNuts/donut.png' alt="Donut" class="w-full h-full object-contain opacity-20" />
      </div>
    </div>

    <!-- Contenu principal -->
    <div class="relative z-10 max-w-6xl">
      <!-- Titre -->
      <h1 class="text-5xl font-bold text-purple-400 mb-10 text-center">Doux Nuts 🍩</h1>
      <p class="text-gray-300 max-w-3xl text-center mx-auto mb-16">
        Projet marketing réalisé dans le cadre du module STRA3, en équipe avec 
        Léa Ouadah, Nicolas Deyber, Sarah Heiby et Anaïs Schutz.  
        L’objectif : créer une marque de donuts artisanaux et concevoir une stratégie complète de communication.
      </p>

      <!-- Section 1 -->
      <div class="grid md:grid-cols-2 gap-12 mb-20">
        <div>
          <h2 class="text-3xl font-semibold text-purple-300 mb-4">🎯 Cible et concept</h2>
          <p class="text-gray-300 leading-relaxed">
            Doux Nuts vise principalement les jeunes entre 15 et 25 ans, passionnés de sucreries et à la recherche
            d’un produit local, fun et gourmand.  
            La marque mise sur des donuts faits maison, avec des ingrédients frais et locaux.
          </p>
          <ul class="list-disc pl-6 mt-4 text-gray-400 space-y-1">
            <li>Produits faits maison et colorés 🍓</li>
            <li>Fabrication locale en Alsace</li>
            <li>Donuts du mois (-20%)</li>
            <li>Offres étudiantes et Uber Eats</li>
          </ul>
        </div>
        <div class="flex items-center justify-center">
          <div class="bg-purple-800/20 border border-purple-600 rounded-2xl p-6 text-center shadow-lg w-80">
            <h3 class="font-semibold text-purple-300 mb-2">Slogan</h3>
            <p class="text-gray-200 italic">« Une douceur sucrée pour égayer ta journée »</p>
          </div>
        </div>
      </div>

      <!-- Section 2 -->
      <div class="mb-20">
        <h2 class="text-3xl font-semibold text-purple-300 mb-6 text-center">💻 Stratégie digitale</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-purple-800/20 border border-purple-600 rounded-2xl p-6 shadow-lg">
            <h3 class="font-semibold text-purple-300 mb-2">Inbound Marketing</h3>
            <p class="text-gray-400 text-sm">
              Création de contenu attractif (visuels, vidéos, promotions) pour attirer et fidéliser la clientèle.
            </p>
          </div>
          <div class="bg-purple-800/20 border border-purple-600 rounded-2xl p-6 shadow-lg">
            <h3 class="font-semibold text-purple-300 mb-2">SEO & SEA</h3>
            <p class="text-gray-400 text-sm">
              Optimisation du référencement naturel et campagnes sponsorisées pour plus de visibilité.
            </p>
          </div>
          <div class="bg-purple-800/20 border border-purple-600 rounded-2xl p-6 shadow-lg">
            <h3 class="font-semibold text-purple-300 mb-2">Réseaux sociaux</h3>
            <p class="text-gray-400 text-sm">
              Présence sur Instagram, TikTok et Pinterest, avec un ton fun et coloré.
            </p>
          </div>
        </div>
      </div>

      <!-- Section 3 -->
      <div class="mb-20 text-center">
        <h2 class="text-3xl font-semibold text-purple-300 mb-6">🎨 Identité visuelle</h2>
        <p class="text-gray-300 max-w-3xl mx-auto mb-8">
          Couleurs pastel, typographie ronde et ambiance sucrée : l’univers graphique évoque la gourmandise et la convivialité.
        </p>
        <img src="" alt="Doux Nuts visuel" class="mx-auto rounded-xl shadow-xl w-full max-w-4xl">
      </div>

      <!-- Lien retour -->
      <div class="text-center">
        <router-link
          to="/"
          class="text-gray-400 hover:text-purple-300 transition"
        >
          ← Retour au portfolio
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue"

// Génération de 3 donuts répartis sur toute la page
const donuts = ref(
  Array.from({ length: 3 }, () => {
    const size = 200 + Math.random() * 150 // taille du donut
    return {
      size: `${size}px`,
      speed: `${60 + Math.random() * 40}s`,
      delay: `${Math.random() * 10}s`,
      // On ajuste top et left pour que le donut reste dans la page
      top: `${Math.random() * (100 - (size / window.innerHeight) * 100)}%`,
      left: `${Math.random() * (100 - (size / window.innerWidth) * 100)}%`,
    }
  })
)
</script>

<style scoped>
@keyframes donutFloat {
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(40px) rotate(180deg);
  }
  100% {
    transform: translateY(0px) rotate(360deg);
  }
}

.donut {
  position: absolute;
  animation: donutFloat linear infinite;
  opacity: 0.3;
  user-select: none;
}
</style>
