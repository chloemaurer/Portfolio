<template>
  <div class="min-h-screen w-full bg-cover bg-center text-white font-sans overflow-x-hidden relative">
    
    <!-- Fond animé -->
    <div class="absolute inset-0 overflow-hidden z-0">
      <div v-for="i in 6" :key="i" class="ribbon" :style="{ '--i': i }"></div>
    </div>

    <!-- Titre -->
    <section class="text-center py-20 px-4 relative z-10">
      <h1 class="text-4xl md:text-5xl font-bold mb-6 text-orange-400 drop-shadow-lg">
        Le Musée des Années 70
      </h1>
      <p class="max-w-3xl mx-auto text-gray-300 leading-relaxed">
        Ce projet web interactif replonge les visiteurs dans l’univers des années 70 à travers
        un site codé en JavaScript, HTML et CSS, combinant effets dynamiques et ambiance rétro.
        Il inclut également un mini-jeu développé en Unity et C# pour enrichir l’expérience.
      </p>
    </section>

    <!-- Développement du site -->
    <section class="py-20 px-6 max-w-6xl mx-auto text-center relative z-10">
      <h2 class="text-3xl font-bold text-yellow-400 mb-4">Développement du site</h2>
      <p class="text-gray-300 max-w-3xl mx-auto mb-12">
        J’ai développé les animations et interactions du site à l’aide de JavaScript :
        effets de survol, transitions fluides et gestion d’éléments dynamiques pour renforcer l’immersion.
        Le but était de créer une expérience web vivante, fidèle à l’énergie visuelle des années 70.
      </p>
      <a
    href="https://projet4.timmatane.ca/2025/tp2/eq1/index.html"
    target="_blank"
    rel="noopener noreferrer"
    class="mt-12 inline-block text-gray-300 hover:text-yellow-400 transition"
    aria-label="Ouvrir le mini-jeu Unity dans un nouvel onglet"
  >
    Lien vers le site du musée
  </a>
    </section>

    <!-- Mini-jeu Unity -->
    <section class="py-20 px-6 max-w-6xl mx-auto text-center relative z-10">
  <h2 class="text-3xl font-bold text-yellow-400 mb-4">Mini-jeu Unity</h2>
  <p class="text-gray-300 max-w-2xl mx-auto mb-12">
    En complément du site, j’ai conçu un mini-jeu sous Unity en C#.
    Le joueur y récolte des objets emblématiques des années 70 (vinyles, boules à facettes, lunettes rondes)
    tout en évitant des obstacles au rythme d’une musique funk.  
    Ce développement m’a permis de travailler la logique de jeu, la physique et la gestion des collisions.
  </p>


  <a
    href="https://projet4.timmatane.ca/2025/tp2/eq1/jeu/index.html"
    target="_blank"
    rel="noopener noreferrer"
    class="mt-12 inline-block text-gray-300 hover:text-yellow-400 transition"
    aria-label="Ouvrir le mini-jeu Unity dans un nouvel onglet"
  >
    Lien vers le jeu Unity
  </a>
</section>

    <!-- Retour -->
    <div class="text-center py-8 relative z-10">
      <router-link to="/" class="mt-12 text-gray-300 hover:text-yellow-400 transition">
        ← Retour au portfolio
      </router-link>
    </div>
  </div>
</template>

<script setup>
// Page statique
</script>

<style scoped>
.ribbon {
  position: absolute;
  top: calc(var(--i) * 15%);
  left: -10%;
  width: 150%;
  height: 80px;
  background: linear-gradient(270deg,
    #ff6a00, #ffca28, #ff4081, #9c27b0, #ff6a00);
  background-size: 600% 100%;
  opacity: 0.15;
  animation: moveGradient 12s ease-in-out infinite, wave 8s ease-in-out infinite;
  animation-delay: calc(var(--i) * -2s);
  filter: blur(20px);
  transform: rotate(calc(var(--i) * 8deg));
  border-radius: 40%;
}

@keyframes moveGradient {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
@keyframes wave {
  0%, 100% { transform: translateY(0) rotate(calc(var(--i) * 8deg)); }
  50% { transform: translateY(-20px) rotate(calc(var(--i) * 8deg)); }
}
</style>
