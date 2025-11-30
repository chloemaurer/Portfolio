<template>
  <div
    class="min-h-screen bg-gradient-to-br from-[#0b0b0d] to-[#1a1a2e] text-white px-6 py-16 relative overflow-x-hidden">

    <!-- Donuts côté gauche -->
    <div class="fixed inset-y-0 left-0 flex flex-col justify-evenly pl-4 pointer-events-none z-0">
      <img src="../assets/DouxNuts/donut.png" class="side-img" />
      <img src="../assets/DouxNuts/donut.png" class="side-img ml-16" />
    </div>

    <!-- Donuts côté droit -->
    <div class="fixed inset-y-0 right-0 flex flex-col justify-evenly pr-4 pointer-events-none z-0">

      <img src="../assets/DouxNuts/donut.png" class="side-img mr-10" />
    </div>

    <!-- Contenu -->
    <section class="max-w-5xl mx-auto text-center relative z-10">
      <h1 class="text-5xl font-bold text-purple-400 mb-10">Doux Nuts 🍩</h1>

      <p class="text-gray-300 mb-10 max-w-3xl mx-auto">
        Projet réalisé dans le cadre du module STRA3, en collaboration avec Léa Ouadah,
        Nicolas Deyber, Sarah Heiby et Anaïs Schutz.
        L'objectif : imaginer une marque de donuts artisanaux et créer une stratégie de communication complète.
      </p>

      <h2 class="text-3xl font-semibold text-purple-300 mb-6">🎯 Cible et concept</h2>
      <p class="text-gray-300 max-w-3xl mx-auto mb-6">
        Doux Nuts vise principalement les jeunes de 15 à 25 ans, à la recherche d’un produit local,
        fun et gourmand. Les donuts sont faits maison avec des ingrédients frais et locaux.
      </p>

      <ul class="list-disc pl-6 text-left max-w-xl mx-auto text-gray-400 space-y-1 mb-12">
        <li>Donuts artisanaux et colorés</li>
        <li>Production locale en Alsace</li>
        <li>Donut du mois (-20%)</li>
        <li>Offres étudiantes et livraison</li>
      </ul>

      <h2 class="text-3xl font-semibold text-purple-300 mb-6">💻 Stratégie digitale</h2>
      <div class="grid md:grid-cols-3 gap-6 mb-12">
        <div class="bg-purple-800/20 border border-purple-600 rounded-xl p-6">
          <h3 class="text-purple-300 font-semibold mb-2">Inbound Marketing</h3>
          <p class="text-gray-400 text-sm">Création de visuels, vidéos et contenus attractifs.</p>
        </div>

        <div class="bg-purple-800/20 border border-purple-600 rounded-xl p-6">
          <h3 class="text-purple-300 font-semibold mb-2">SEO & SEA</h3>
          <p class="text-gray-400 text-sm">Optimisation du référencement et campagnes sponsorisées.</p>
        </div>

        <div class="bg-purple-800/20 border border-purple-600 rounded-xl p-6">
          <h3 class="text-purple-300 font-semibold mb-2">Réseaux sociaux</h3>
          <p class="text-gray-400 text-sm">Présence active sur Instagram, TikTok et Pinterest.</p>
        </div>
      </div>

      <h2 class="text-3xl font-semibold text-purple-300 mb-6">🎨 Identité visuelle</h2>
      <p class="text-gray-300 max-w-3xl mx-auto mb-8">
        Une identité pastel, joyeuse et gourmande, avec une typographie ronde et des visuels chaleureux.
      </p>


      <iframe id="pdfFrame" src="src/assets/DouxNuts/Douxnuts.pdf" width="100%" height="50px"
        class="rounded-lg"></iframe>


      <!-- Retour -->
      <div class="text-center py-8  relative z-10">
        <router-link to="/" class="mt-12 text-purple-700 hover:text-blue-400 transition">
          ← Retour au portfolio
        </router-link>
      </div>

    </section>
  </div>
</template>




<style scoped>
.side-img {
  width: 140px;
  opacity: 0.35;
  object-fit: contain;
  filter: drop-shadow(0 0 6px rgba(0, 0, 0, 0.4));
  transition: opacity 0.3s ease;
}

.side-img:hover {
  opacity: 0.6;
}
</style>
