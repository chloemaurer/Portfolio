<template>
  <div
    class="min-h-screen flex flex-col bg-gradient-to-b from-[#0b0b0d] to-[#1a1a2e] text-white font-inter scroll-smooth">

    <header
      class="sticky top-0 z-50 bg-purple-900/10 backdrop-blur-md p-6 flex justify-between items-center border-b border-purple-700">

      <h1 class="text-3xl font-poppins font-bold text-purple-400 hover:scale-105 transition-transform">
        Chloé Maurer
      </h1>

      <!-- Menu desktop -->
      <nav class="hidden md:flex gap-6 text-lg">
        <a href="#profil" class="hover:text-purple-300 transition-colors">Profil</a>
        <a href="#formation" class="hover:text-purple-300 transition-colors">Formation</a>
        <a href="#competences" class="hover:text-purple-300 transition-colors">Compétences</a>
        <a href="#projets" class="hover:text-purple-300 transition-colors">Projets</a>
        <a href="#contact" class="hover:text-purple-300 transition-colors">Contact</a>
      </nav>

      <!-- Burger Button -->
      <button @click="toggleMenu" :class="{ 'open': menuOpen }" class="md:hidden flex flex-col gap-1.5">
        <span :class="menuOpen ? 'rotate-45 translate-y-2' : ''" class="w-8 h-0.5 bg-purple-300 transition-all"></span>
        <span :class="menuOpen ? 'opacity-0' : ''" class="w-8 h-0.5 bg-purple-300 transition-all"></span>
        <span :class="menuOpen ? '-rotate-45 -translate-y-2' : ''"
          class="w-8 h-0.5 bg-purple-300 transition-all"></span>
      </button>

      <!-- Menu mobile coulissant -->
      <nav :class="menuOpen ? 'translate-x-0' : 'translate-x-full'"
        class="fixed top-0 right-0 w-64 h-full bg-purple-900/95 backdrop-blur-md text-white p-10 flex flex-col gap-6 text-xl transform transition-transform duration-300 md:hidden z-40">
        <a href="#profil" @click="closeMenu" class="hover:text-purple-300 transition-colors">Profil</a>
        <a href="#formation" @click="closeMenu" class="hover:text-purple-300 transition-colors">Formation</a>
        <a href="#competences" @click="closeMenu" class="hover:text-purple-300 transition-colors">Compétences</a>
        <a href="#projets" @click="closeMenu" class="hover:text-purple-300 transition-colors">Projets</a>
        <a href="#contact" @click="closeMenu" class="hover:text-purple-300 transition-colors">Contact</a>
      </nav>
    </header>
    <!-- Hero -->
    <section class="flex-1 flex flex-col items-center justify-center text-center px-6 py-24 fade-in">
      <h2 id="typedText" class="text-5xl md:text-6xl font-extrabold font-poppins text-purple-300"></h2>
    </section>

    <!-- Profil -->
    <section id="profil"
      class="px-4 py-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center fade-in">
      <div>
        <h3 class="text-3xl font-poppins font-bold text-purple-400 mb-4">Profil</h3>
        <p class="text-gray-300 leading-relaxed mb-4">
          Je suis Chloé Maurer, étudiante en intégration multimédia et développement web...
        </p>
        <p class="text-gray-300 leading-relaxed mb-4">
          J'aime inventer des jeux, créer leurs règles, imaginer des énigmes et concevoir des expériences
          interactives.
          C’est pour cette raison que je suis venue au Québec pour ma troisième année, afin de découvrir comment créer
          des jeux plus immersifs.
        </p>
        <p class="text-gray-300 leading-relaxed">
          Plus tard, je souhaite m’orienter soit vers le développement de jeux vidéo, soit vers le développement web,
          pour continuer à créer et partager des expériences qui me passionnent.
        </p>
      </div>

      <div class="flex justify-center md:justify-end">
        <div class="rounded-2xl bg-purple-700/20 border border-purple-600 flex items-center justify-center
                w-36 h-36 sm:w-60 sm:h-60 md:w-60 md:h-80">
          <img src="../assets/photo.jpg" alt="Photo Chloé Maurer" class="rounded-2xl object-cover w-full h-full">
        </div>
      </div>
    </section>


    <section class="flex flex-col md:flex-row items-center justify-center px-6 py-16 bg-purple-900/10 fade-in gap-8">
      <!-- Langues -->
      <div class="flex-0.5 text-center">
        <h3 class="text-3xl font-poppins font-bold text-purple-400 mb-4">Langues</h3>
        <ul class="flex justify-center gap-4 text-gray-300 font-semibold">
          <li>Français</li>
          <li>Anglais</li>
          <li>Allemand</li>
        </ul>
      </div>

      <!-- Séparateur vertical -->
      <div class="hidden md:block w-px bg-purple-400 h-32"></div>

      <!-- Réseaux -->
      <div class="flex-0.5 text-center">
        <h3 class="text-3xl font-poppins font-bold text-purple-400 mb-4">Réseaux</h3>
        <div class="flex flex-col gap-2 text-gray-300">
          <a href="https://github.com/chloemaurer" target="_blank"
            class="hover:text-purple-300 transition-colors font-semibold">
            <span class="text-purple-400">•</span> GitHub — github.com/chloemaurer
          </a>
          <a href="https://www.linkedin.com/in/chloe-maurer/" target="_blank"
            class="hover:text-purple-300 transition-colors font-semibold">
            <span class="text-purple-400">•</span> LinkedIn — Chloé Maurer
          </a>
        </div>
      </div>
    </section>




    <!-- Télécharger mon CV -->
    <section id="cv" class="px-6 py-20 text-center border-t border-purple-700 fade-in">
      <h3 class="text-3xl font-poppins font-bold text-purple-400 mb-6">Mon CV</h3>
      <p class="text-gray-300 mb-8">Télécharge mon CV en cliquant sur le bouton ci-dessous</p>
      <a href="/cv-chloe-maurer.pdf" download="Chloe_Maurer_CV.pdf"
        class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-500 rounded-2xl hover:scale-105 transition-transform text-white font-semibold">
        Télécharger mon CV
      </a>
    </section>

    <!-- Formation -->
    <section id="formation" class="px-6 py-20 bg-purple-900/10 fade-in">
      <h3 class="text-3xl font-poppins font-bold text-purple-400 text-center mb-12">Formation</h3>
      <p class="max-w-4xl mx-auto space-y-6 text-gray-300  text-center">2023 - En Cours</p>
      <p class="max-w-4xl mx-auto space-y-6 text-gray-300 font-semibold text-center">
        DEC Intégration Multimédia et de l’Internet, Cegep de Matane<br>
        Parcours : Développement Web
      </p>
    </section>

    <!-- Expériences -->
    <!---<section id="experience" class="px-6 py-20 max-w-6xl mx-auto fade-in">
      <h3 class="text-3xl font-poppins font-bold text-purple-400 text-center mb-12">Expériences</h3>
      <ul class="space-y-6 text-gray-300  text-center">
        <li>
          <p class="font-bold text-purple-400">Tutrice — Développement Web (2025)</p> Cours de tutorat pour étudiants.
        </li>
        <li>
          <p class="font-bold text-purple-400">Stage — Électricité de Strasbourg (2025)</p> Réalisation d’un Motion
          Design et
          interface interactive.
        </li>
        <li>
          <p class="font-bold text-purple-400">Stage BAFA</p> Encadrement de jeunes enfants, animation en camp de
          vacances, bivouac.
        </li>
        <li>
          <p class="font-bold text-purple-400">Job d’été — Boulangerie Maulbecker Maurer (2024)</p> Accueil clients,
          prise de
          commande, gestion caisse.
        </li>
        <li>
          <p class="font-bold text-purple-400">Projet personnel — Jeu vidéo (2022)</p> Codage en C et apprentissage en
          autonomie.
        </li>
      </ul>
    </section> -->

    <!-- Compétences et Loisirs -->
    <!--<section id="competences" class="px-6 py-20  fade-in">
      <h3 class="text-3xl font-poppins font-bold text-purple-400 text-center mb-12">Compétences</h3>
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <span
          class="px-4 py-2 bg-purple-700/20 border border-purple-600 rounded-full hover:scale-105 transition-transform">Autonome</span>
        <span
          class="px-4 py-2 bg-purple-700/20 border border-purple-600 rounded-full hover:scale-105 transition-transform">Flexible</span>
        <span
          class="px-4 py-2 bg-purple-700/20 border border-purple-600 rounded-full hover:scale-105 transition-transform">Curieuse</span>
        <span
          class="px-4 py-2 bg-purple-700/20 border border-purple-600 rounded-full hover:scale-105 transition-transform">Polyvalente</span>
        <span
          class="px-4 py-2 bg-purple-700/20 border border-purple-600 rounded-full hover:scale-105 transition-transform">Sociale</span>
      </div>
      <h3 class="text-3xl font-poppins font-bold text-purple-400 text-center mb-12">Loisirs</h3>
      <div class="flex flex-wrap justify-center gap-4 text-violet-50">
        <span
          class="px-4 py-2 bg-purple-700/20 border border-purple-600 rounded-full hover:scale-105 transition-transform">Jeux
          vidéos</span>
        <span
          class="px-4 py-2 bg-purple-700/20 border border-purple-600 rounded-full hover:scale-105 transition-transform">Films</span>
        <span
          class="px-4 py-2 bg-purple-700/20 border border-purple-600 rounded-full hover:scale-105 transition-transform">Séries</span>
        <span
          class="px-4 py-2 bg-purple-700/20 border border-purple-600 rounded-full hover:scale-105 transition-transform">Escape
          Game</span>
        <span
          class="px-4 py-2 bg-purple-700/20 border border-purple-600 rounded-full hover:scale-105 transition-transform">Énigmes</span>
        <span
          class="px-4 py-2 bg-purple-700/20 border border-purple-600 rounded-full hover:scale-105 transition-transform">Cuisine</span>
      </div>
    </section>-->

    <!-- Compétences -->
    <section id="competences" class="px-6 py-20  fade-in">
      <h3 class="text-3xl font-poppins font-bold pb-16 text-purple-400 text-center">
        Compétences
      </h3>

      <!-- Grille : 3 colonnes + 2 séparateurs -->
      <div class="max-w-8xl mx-10 grid grid-cols-[1fr_0.5fr_1fr_0.5fr_1fr] gap-4 text-center">


        <!-- Bloc : Dév Web -->
        <div class="flex flex-col items-center">
          <h4 class="text-xl font-semibold text-purple-400 mb-6">Développement Web</h4>

          <div class="grid grid-cols-4 gap-4 place-items-center w-full">
            <img src="../assets/competences/html.png"
              class="w-12 h-12 hover:scale-110 hover:drop-shadow-[0_0_10px_#a855f7] transition-all duration-300">
            <img src="../assets/competences/css.png"
              class="w-8 h-12 hover:scale-110 hover:drop-shadow-[0_0_10px_#a855f7] transition-all duration-300">
            <img src="../assets/competences/js.png"
              class="w-10 h-10 hover:scale-110 hover:drop-shadow-[0_0_10px_#a855f7] transition-all duration-300">
            <img src="../assets/competences/php.png"
              class="h-10 hover:scale-110 hover:drop-shadow-[0_0_10px_#a855f7] transition-all duration-300">

            <img src="../assets/competences/linux.png"
              class="h-12 hover:scale-110 hover:drop-shadow-[0_0_10px_#a855f7] transition-all duration-300">
            <img src="../assets/competences/twig.png"
              class="h-12 hover:scale-110 hover:drop-shadow-[0_0_10px_#a855f7] transition-all duration-300">
            <img src="../assets/competences/bootsrap.png"
              class="w-15 h-15 hover:scale-110 hover:drop-shadow-[0_0_10px_#a855f7] transition-all duration-300">
            <img src="../assets/competences/wordpress.png"
              class="w-12 h-12 hover:scale-110 hover:drop-shadow-[0_0_10px_#a855f7] transition-all duration-300">

            <img src="../assets/competences/sass.png"
              class="h-12 hover:scale-110 hover:drop-shadow-[0_0_10px_#a855f7] transition-all duration-300">
            <img src="../assets/competences/tailwind.png"
              class="w-12 h-12 hover:scale-110 hover:drop-shadow-[0_0_10px_#a855f7] transition-all duration-300">
            <img src="../assets/competences/unity.png"
              class="h-12 hover:scale-110 hover:drop-shadow-[0_0_10px_#a855f7] transition-all duration-300">
          </div>
        </div>


        <!-- Séparateur 1 -->
        <div class="hidden md:flex justify-center">
          <div class="w-px bg-purple-400 h-48"></div>
        </div>


        <!-- Bloc : Création Numérique -->
        <div class="flex flex-col items-center ">
          <h4 class="text-xl font-semibold text-purple-400 mb-6">Création Numérique</h4>

          <div class="grid grid-cols-4 gap-4 place-items-center w-full">
            <img src="../assets/competences/photoshop.png"
              class="w-12 h-12 hover:scale-110 hover:drop-shadow-[0_0_10px_#a855f7] transition-all duration-300">
            <img src="../assets/competences/illustrator.png"
              class="w-12 h-12 hover:scale-110 hover:drop-shadow-[0_0_10px_#a855f7] transition-all duration-300">
            <img src="../assets/competences/aftereffect.png"
              class="w-12 h-12 hover:scale-110 hover:drop-shadow-[0_0_10px_#a855f7] transition-all duration-300">
            <img src="../assets/competences/indesign.png"
              class="w-12 h-12 hover:scale-110 hover:drop-shadow-[0_0_10px_#a855f7] transition-all duration-300">

            <img src="../assets/competences/figma.png"
              class="h-10 hover:scale-110 hover:drop-shadow-[0_0_10px_#a855f7] transition-all duration-300">
            <img src="../assets/competences/davinci.png"
              class="w-12 h-12 hover:scale-110 hover:drop-shadow-[0_0_10px_#a855f7] transition-all duration-300">
            <img src="../assets/competences/canva.jpg"
              class="w-12 h-12 hover:scale-110 hover:drop-shadow-[0_0_10px_#a855f7] transition-all duration-300">
            <img src="../assets/competences/blender.png"
              class="h-12 hover:scale-110 hover:drop-shadow-[0_0_10px_#a855f7] transition-all duration-300">
          </div>
        </div>


        <!-- Séparateur 2 -->
        <div class="hidden md:flex justify-center">
          <div class="w-px bg-purple-400 h-48"></div>
        </div>


        <!-- Bloc : Autres -->
        <div class="flex flex-col items-center ">
          <h4 class="text-xl font-semibold text-purple-400 mb-6">Autres</h4>

          <div class="grid gap-4 place-items-center w-full">
            <img src="../assets/competences/Gantt.png"
              class="w-12 h-12 hover:scale-110 hover:drop-shadow-[0_0_10px_#a855f7] transition-all duration-300">
            <img src="../assets/competences/miro.png"
              class="w-12 h-12 hover:scale-110 hover:drop-shadow-[0_0_10px_#a855f7] transition-all duration-300">
          </div>
        </div>

      </div>
    </section>



    <!-- Projets avec image au hover -->
    <section id="projets" class="px-6 py-20 max-w-6xl mx-auto fade-in">
      <h3 class="text-4xl font-bold text-purple-400 text-center mb-16">Projets réalisés</h3>

      <!-- Développement -->
      <div class="mb-16">
        <h4 class="text-2xl font-semibold text-purple-300 mb-8 border-b border-purple-700 pb-2">Développement</h4>
        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="(projet, i) in devProjects" :key="i"
            class="relative group rounded-2xl overflow-hidden border border-purple-700 bg-purple-800/20 shadow-lg h-60 flex items-center justify-center p-6">

            <!-- Contenu texte visible par défaut -->
            <div class="z-10 text-center">
              <h5 class="text-xl font-semibold text-purple-400 mb-2">{{ projet.title }}</h5>
              <p class="text-sm text-gray-300 mb-2">{{ projet.description }}</p>
              <p class="text-xs text-gray-500">{{ projet.tech }}</p>
              <p class="text-sm text-violet-300 mt-4">{{ projet.date }}</p>
              <div v-if="projet.link" class="mt-2">
                <router-link :to="projet.link"
                  class="inline-flex items-center gap-2 px-4 py-2 text-sm bg-gradient-to-r from-purple-600 to-purple-500 rounded-xl hover:scale-105 transition-transform text-white ">Voir
                  le projet</router-link>
              </div>
            </div>

            <!-- Image qui apparaît au hover -->
            <img :src="projet.cover"
              class="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-25 transition-all duration-500 scale-105">

            <!-- Overlay sombre pour lisibilité -->
            <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity- transition-opacity duration-500">
            </div>
          </div>
        </div>
      </div>

      <!-- Graphisme et Marketing, même structure -->
      <div class="mb-16">
        <h4 class="text-2xl font-semibold text-purple-300 mb-8 border-b border-purple-700 pb-2">Graphisme</h4>
        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="(projet, i) in graphicProjects" :key="i"
            class="relative group rounded-2xl overflow-hidden border border-purple-700 bg-purple-800/20 shadow-lg h-60 flex items-center justify-center p-6">
            <div class="z-10 text-center">
              <h5 class="text-xl font-semibold text-purple-400 mb-2">{{ projet.title }}</h5>
              <p class="text-sm text-gray-300 mb-2">{{ projet.description }}</p>
              <p class="text-xs text-gray-500">{{ projet.tech }}</p>
              <p class="text-sm text-violet-300 mt-4">{{ projet.date }}</p>
              <div v-if="projet.link" class="mt-2">
                <router-link :to="projet.link"
                  class="inline-flex items-center gap-2 px-4 py-2 text-sm bg-gradient-to-r from-purple-600 to-purple-500 rounded-xl hover:scale-105 transition-transform text-white">Voir
                  le projet</router-link>
              </div>
            </div>
            <img :src="projet.cover"
              class="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-25 transition-all duration-500 scale-105">
            <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-50 transition-opacity duration-500">
            </div>
          </div>
        </div>
      </div>

      <div>
        <h4 class="text-2xl font-semibold text-purple-300 mb-8 border-b border-purple-700 pb-2">Marketing</h4>
        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="(projet, i) in marketingProjects" :key="i"
            class="relative group rounded-2xl overflow-hidden border border-purple-700 bg-purple-800/20 shadow-lg h-60 flex items-center justify-center p-6">
            <div class="z-10 text-center">
              <h5 class="text-xl font-semibold text-purple-400 mb-2">{{ projet.title }}</h5>
              <p class="text-sm text-gray-300 mb-2">{{ projet.description }}</p>
              <p class="text-xs text-gray-500">{{ projet.tech }}</p>
              <p class="text-sm text-violet-300 mt-4">{{ projet.date }}</p>
              <div v-if="projet.link" class="mt-2">
                <router-link :to="projet.link" class=" inline-flex items-center gap-2 px-4 py-2 text-sm bg-gradient-to-r
                  from-purple-600 to-purple-500 rounded-xl hover:scale-105 transition-transform text-white
                  ">Voir le projet</router-link>
              </div>
            </div>
            <img :src="projet.cover"
              class="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-25 transition-all duration-500 scale-105">
            <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-50 transition-opacity duration-500">
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- Contact -->
    <section id="contact" class="px-6 py-20 text-center fade-in">
      <h3 class="text-3xl font-poppins font-bold text-purple-400 mb-6">Me contacter</h3>
      <p class="text-gray-300 mt-6">📞 +33 7 68 90 72 09</p>
      <p class="text-gray-300 ">✉️ chloe29.maurer@gmail.com </p>
      <p class="text-gray-300 mb-6">📍 598 avenue St
        Rédempteur, G4W 0H2 Matane, Québec</p>
      <form ref="contactForm" @submit.prevent="sendForm" class="flex flex-col max-w-md mx-auto gap-4">
        <input type="text" name="nom" placeholder="Nom" required
          class="px-4 py-2 rounded-lg border border-purple-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-purple-400" />
        <input type="email" name="email" placeholder="Email" required
          class="px-4 py-2 rounded-lg border border-purple-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-purple-400" />
        <textarea name="message" placeholder="Message" required
          class="px-4 py-2 rounded-lg border border-purple-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"></textarea>
        <button type="submit"
          class="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-500 rounded-2xl hover:scale-105 transition-transform text-white font-semibold">Envoyer</button>
      </form>
      <p v-if="successMessage" class="mt-4 text-green-400 animate-fade">{{ successMessage }}</p>
      <p v-if="errorMessage" class="mt-4 text-red-400 animate-fade">{{ errorMessage }}</p>
    </section>

    <!-- Footer -->
    <footer class="py-6 text-center text-gray-500 text-sm border-t border-purple-700">
      © 2025 Chloé Maurer
    </footer>

  </div>
</template>


<script setup lang="ts">

import { ref, onMounted } from "vue";
import { devProjects, graphicProjects, marketingProjects } from "../js/projet.js";

const contactForm = ref<HTMLFormElement | null>(null);
const successMessage = ref("");
const errorMessage = ref("");

const sendForm = async () => {
  if (!contactForm.value) return;
  successMessage.value = "";
  errorMessage.value = "";
  const formData = new FormData(contactForm.value);

  try {
    const response = await fetch("https://formspree.io/f/xldoyqgy", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      successMessage.value = "Message envoyé avec succès !";
      contactForm.value.reset();
    } else {
      errorMessage.value = "Erreur lors de l’envoi du message 😕";
    }
  } catch {
    errorMessage.value = "Impossible d’envoyer le message 😕";
  }

  setTimeout(() => {
    successMessage.value = "";
    errorMessage.value = "";
  }, 4000);
};

// Etat du menu mobile
const menuOpen = ref(false);

// Fonction pour basculer l'état du menu
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

// Fonction pour fermer le menu (utile lors du clic sur un lien)
const closeMenu = () => {
  menuOpen.value = false;
};


// Animation d'écriture
const text = "Bienvenue sur mon portfolio ✨";
const speed = 60;
let index = 0;

onMounted(() => {
  function typeEffect() {
    const el = document.querySelector("#typedText");
    if (!el) return;

    if (index < text.length) {
      el.textContent += text.charAt(index);
      index++;
      setTimeout(typeEffect, speed);
    }
  }

  typeEffect();
});

</script>
