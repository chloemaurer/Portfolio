<template>
  <div
    class="min-h-screen w-full bg-gradient-to-br from-[#0b0b0d] to-[#1a1a2e] text-white font-sans overflow-hidden relative">

    <!-- Fond animé vinyles / disco -->
    <div class="absolute inset-0 z-0">
      <div v-for="v in vinyls" :key="v.id" class="vinyl" :style="{
        top: v.top,
        left: v.left,
        width: v.size,
        height: v.size,
        animationDelay: v.delay,
        animationDuration: v.speed
      }">
        <img src="../assets/Musee70/vinyl.png" alt="Vinyle" class="w-full h-full object-contain" />
      </div>
    </div>

    <!-- Contenu principal -->
    <section class="text-center py-4 px-4 relative z-10">
      <h1 class="text-4xl md:text-5xl font-bold mb-6  drop-shadow-lg">
        Le Musée des Années 70
      </h1>
      <p class="max-w-3xl mx-auto text-gray-300 leading-relaxed">
        Ce projet web interactif replonge les visiteurs dans l’univers des années 70 à travers
        un site codé en JavaScript, HTML et CSS, combinant effets dynamiques et ambiance rétro.
        Il inclut également un mini-jeu développé en Unity et C# pour enrichir l’expérience.
        L’interface rappelle les couleurs vives et les motifs psychédéliques caractéristiques de l’époque.
      </p>
    </section>

    <section class="py-20 px-6 max-w-6xl mx-auto text-center relative z-10">
      <h2 class="text-3xl font-bold mb-4 ">Développement du site</h2>
      <p class="text-gray-300 max-w-3xl mx-auto mb-12">
        J’ai développé les animations et interactions du site à l’aide de JavaScript.
        Les vinyles flottants et les boules à facettes apportent un côté vivant et immersif, avec des rotations et des
        flottements simulant l’atmosphère disco.
        L’objectif était de créer une expérience web dynamique et fidèle à l’énergie visuelle des années 70.
      </p>
      <a href="https://projet4.timmatane.ca/2025/tp2/eq1/index.html" target="_blank" rel="noopener noreferrer"
        class="inline-block text-gray-300  bg-blue-800/40 py-4 px-8 rounded-2xl text-center shadow-lg transition">
        🔗 Lien vers le site du musée
      </a>
    </section>

    <section class="py-4 px-6 max-w-6xl mx-auto text-center relative z-10">
      <h2 class="text-3xl font-bold mb-4 ">Mini-jeu Unity</h2>
      <p class="text-gray-300 max-w-2xl mx-auto mb-12">
        En complément du site, j’ai conçu un mini-jeu sous Unity en C# où le joueur récolte des objets emblématiques des
        années 70 (vinyles, boules à facettes, lunettes rondes) tout en évitant des obstacles.
        Ce développement m’a permis de travailler la logique de jeu, la physique et la gestion des collisions.
      </p>
      <a href="https://projet4.timmatane.ca/2025/tp2/eq1/jeu/index.html" target="_blank" rel="noopener noreferrer"
        class=" inline-block text-gray-300 bg-blue-800/40 py-4 px-8 rounded-2xl text-center shadow-lg transition">
        🔗 Musee des années 70
      </a>
    </section>

    <div class="text-center py-8  relative z-10">
      <router-link to="/" class="mt-12 text-purple-700 hover:text-blue-400 transition">
        ← Retour au portfolio
      </router-link>
    </div>
  </div>
</template>

<script setup>
const vinyls = [
  { id: 1, top: '10%', left: '5%', size: '100px', speed: '8s', delay: '0s' },
  { id: 2, top: '30%', left: '85%', size: '120px', speed: '10s', delay: '2s' },
  { id: 3, top: '55%', left: '15%', size: '90px', speed: '9s', delay: '1s' },
  { id: 4, top: '75%', left: '80%', size: '110px', speed: '11s', delay: '3s' },
];
</script>


<style scoped>
.vinyl {
  position: absolute;
  transform-origin: center;
  animation: floatVinyl ease-in-out infinite;
}

.vinyl img {
  display: block;
  filter: drop-shadow(0 0 8px rgba(55, 0, 255, 0.5));
}

/* Animation vinyle flottant et rotation */
@keyframes floatVinyl {
  0% {
    transform: translateY(0px) rotate(0deg);
  }

  25% {
    transform: translateY(-15px) rotate(30deg);
  }

  50% {
    transform: translateY(10px) rotate(60deg);
  }

  75% {
    transform: translateY(-5px) rotate(90deg);
  }

  100% {
    transform: translateY(0px) rotate(120deg);
  }
}
</style>
