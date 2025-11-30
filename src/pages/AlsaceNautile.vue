<template>
  <div
    class="min-h-screen w-full bg-gradient-to-b from-[#0b0b0d] to-[#1a1a2e] text-white font-sans overflow-x-hidden relative">

    <!-- Effet bulles -->
    <div class="absolute inset-0 overflow-hidden">
      <div v-for="i in 50" :key="i" class="bubble"></div>
    </div>

    <!-- Titre principal -->
    <section class="text-center py-20 px-4 relative z-10">
      <h1 class="text-4xl md:text-5xl font-bold mb-6 text-purple-400">L’Alsace Nautile Club</h1>
      <p class="max-w-3xl mx-auto text-gray-300 leading-relaxed">
        L’Alsace Nautile Club (ANC) est une association dédiée à la pratique et à l’apprentissage de la plongée
        sous-marine en Alsace.
        Le club permet aux passionnés de découvrir et de perfectionner leur technique dans un environnement encadré et
        convivial.
      </p>
    </section>

    <!-- Charte graphique -->
    <section>
      <div class="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <h2 class="text-3xl font-bold text-purple-400 mb-4">Charte graphique</h2>
          <p class="text-gray-300 leading-relaxed mb-4">
            Refonte complète de l’identité visuelle : modernisation du logo, palette marine et typographie adaptée à
            l’univers de la plongée.
          </p>
          <ul class="list-disc list-inside text-gray-400 space-y-1">
            <li>Nouveau logo stylisé autour du nautile</li>
            <li>Palette de couleurs marines et dynamiques</li>
            <li>Typographie « Mariné » pour une identité forte</li>
          </ul>
        </div>
        <img src="../assets/AlsaceNautile/CharteGraphique.png" alt="Charte graphique" />
      </div>
      <div class="flex justify-center">
        <img src="../assets/AlsaceNautile/logo.png" alt="logo">
      </div>
    </section>

    <!-- Maquettes -->
    <section class=" py-20 px-6 relative z-10">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-purple-400 mb-4">Les Maquettes</h2>
        <p class="text-gray-300 max-w-3xl mx-auto mb-12">
          Création de maquettes web responsives et ergonomiques, pour une navigation fluide sur ordinateur, tablette et
          mobile.
        </p>
        <img src="../assets/AlsaceNautile/Maquettes.png" alt="Maquettes du site"
          class="rounded-2xl shadow-lg border border-purple-700 mx-auto" />
      </div>
    </section>

    <!-- Goodies -->
    <section class="py-20 px-6 max-w-6xl mx-auto text-center relative z-10">
      <h2 class="text-3xl font-bold text-purple-400 mb-4">Création de goodies</h2>
      <p class="text-gray-300 max-w-2xl mx-auto mb-12">
        Déclinaison du logo sur différents supports : textiles, bouteilles, accessoires et goodies pour renforcer la
        cohérence de l’image du club.
      </p>
      <img src="../assets/AlsaceNautile/Goodies.png" alt="Goodies" />
    </section>


    <div class="text-center py-8  relative z-10">
      <router-link to="/" class="mt-12 text-purple-700 hover:text-blue-400 transition">
        ← Retour au portfolio
      </router-link>
    </div>
  </div>
</template>



<style scoped>
/* Bulles animées pour l’ambiance sous-marine */
.bubble {
  position: absolute;
  bottom: -10%;
  width: 20px;
  height: 20px;
  background: rgba(124, 58, 237, 0.489);
  border-radius: 50%;
  animation: floatUp 12s infinite ease-in-out;
}

@keyframes floatUp {
  0% {
    transform: translateY(0) scale(1);
    opacity: 0.7;
  }

  100% {
    transform: translateY(-1000vh) scale(1.5);
    opacity: 0.7;
  }
}

/* Variation des tailles et durées */
.bubble:nth-child(odd) {
  width: 10px;
  height: 10px;
  animation-duration: 12s;
}

.bubble:nth-child(even) {
  width: 25px;
  height: 25px;
  animation-duration: 18s;
}

/* Position aléatoire */
.bubble:nth-child(1) {
  left: 10%;
  animation-delay: 1s;
}

.bubble:nth-child(2) {
  left: 20%;
  animation-delay: 2s;
}

.bubble:nth-child(3) {
  left: 35%;
  animation-delay: 3s;
}

.bubble:nth-child(4) {
  left: 50%;
  animation-delay: 2s;
}

.bubble:nth-child(5) {
  left: 65%;
  animation-delay: 3s;
}

.bubble:nth-child(6) {
  left: 80%;
  animation-delay: 5s;
}

.bubble:nth-child(7) {
  left: 95%;
  animation-delay: 4s;
}

.bubble:nth-child(8) {
  left: 100%;
  animation-delay: 2s;
}
</style>
