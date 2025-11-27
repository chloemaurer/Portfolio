<template>
  <div
    class="min-h-screen flex flex-col bg-gradient-to-b from-[#0b0b0d] to-[#1a1a2e] text-white font-inter scroll-smooth">

    <!-- Header -->
    <header
      class="sticky top-0 z-50 bg-purple-900/10 backdrop-blur-md p-6 flex justify-between items-center border-b border-purple-700">
      <h1 class="text-3xl font-poppins font-bold text-purple-400 hover:scale-105 transition-transform">Chloé Maurer</h1>
      <nav class="flex gap-6">
        <a href="#profil" class="hover:text-purple-300 transition-colors">Profil</a>
        <a href="#formation" class="hover:text-purple-300 transition-colors">Formation</a>
        <a href="#experience" class="hover:text-purple-300 transition-colors">Expériences</a>
        <a href="#competences" class="hover:text-purple-300 transition-colors">Compétences</a>
        <a href="#projets" class="hover:text-purple-300 transition-colors">Projets</a>
        <a href="#contact" class="hover:text-purple-300 transition-colors">Contact</a>
      </nav>
    </header>

    <!-- Hero -->
    <section class="flex-1 flex flex-col items-center justify-center text-center px-6 py-24 fade-in">
      <h2 id="typedText" class="text-5xl md:text-6xl font-extrabold font-poppins text-purple-300"></h2>
    </section>

    <!-- Profil -->
    <section id="profil" class="px-4 py-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center fade-in">
      <div>
        <h3 class="text-3xl font-poppins font-bold text-purple-400 mb-4">Profil</h3>
        <p class="text-gray-300 leading-relaxed">
          Étudiante dans les métiers du multimédia et de l’internet, avec des aptitudes en gestion de projet,
          stratégie de communication, graphisme, création numérique et développement web.
          Je suis autonome, curieuse, flexible et sociable.
        </p>
        <h3 class="text-2xl font-poppins font-bold text-purple-400 mt-6">Langues</h3>
        <ul class="mt-4 flex flex-wrap gap-4 text-gray-300">
          <li>Français</li>
          <li>Anglais</li>
          <li>Allemand</li>
        </ul>
      </div>
      <div class="flex justify-center md:justify-end">
        <div class="w-60 h-60 rounded-2xl bg-purple-700/20 border border-purple-600 flex items-center justify-center">
          <img src="../assets/photo.jpg" alt="Photo Chloé Maurer" class="rounded-2xl  object-cover">
        </div>
      </div>
    </section>

    <!-- Télécharger mon CV -->
    <section id="cv" class="px-6 py-20 text-center border-t border-purple-700 fade-in">
      <h3 class="text-3xl font-poppins font-bold text-purple-400 mb-6">Mon CV</h3>
      <p class="text-gray-300 mb-8">Télécharge mon CV en cliquant sur le bouton ci-dessous 👇</p>
      <a href="/cv-chloe-maurer.pdf" download="Chloe_Maurer_CV.pdf"
        class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-500 rounded-2xl hover:scale-105 transition-transform text-white font-semibold">
        Télécharger mon CV
      </a>
    </section>

    <!-- Formation -->
    <section id="formation" class="px-6 py-20 bg-purple-900/10 fade-in">
      <h3 class="text-3xl font-poppins font-bold text-purple-400 text-center mb-12">Formation</h3>
      <p class="max-w-4xl mx-auto space-y-6 text-gray-300 font-semibold text-center">
        DEC Intégration Multimédia et de l’Internet, Cegep de Matane<br>
        Parcours : Développement Web — 2023 - 2026
      </p>
    </section>

    <!-- Expériences -->
    <section id="experience" class="px-6 py-20 max-w-6xl mx-auto fade-in">
      <h3 class="text-3xl font-poppins font-bold text-purple-400 text-center mb-12">Expériences</h3>
      <ul class="space-y-6 text-gray-300  text-center">
        <li>
          <p class="font-bold text-purple-400">Tutrice — Développement Web (2025)</p> Cours de tutorat pour étudiants.
        </li>
        <li>
          <p class="font-bold text-purple-400">Stage — Électricité de Strasbourg (2025)</p> Réalisation d’un Motion Design et
          interface interactive.
        </li>
        <li>
          <p class="font-bold text-purple-400">Stage BAFA</p> Encadrement de jeunes enfants, animation en camp de vacances, bivouac.
        </li>
        <li>
          <p class="font-bold text-purple-400">Job d’été — Boulangerie Maulbecker Maurer (2024)</p> Accueil clients, prise de
          commande, gestion caisse.
        </li>
        <li>
          <p class="font-bold text-purple-400">Projet personnel — Jeu vidéo (2022)</p> Codage en C et apprentissage en autonomie.
        </li>
      </ul>
    </section>

    <!-- Compétences et Loisirs -->
    <section id="competences" class="px-6 py-20 bg-purple-900/10 fade-in">
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
    </section>

    <!-- Projets avec image au hover -->
    <section id="projets" class="px-6 py-20 max-w-6xl mx-auto fade-in">
      <h3 class="text-4xl font-bold text-purple-400 text-center mb-16">Projets réalisés</h3>

      <!-- Développement -->
      <div class="mb-16">
        <h4 class="text-2xl font-semibold text-purple-300 mb-8 border-b border-purple-700 pb-2">Développement</h4>
        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="(projet, i) in devProjects" :key="i"
            class="relative group rounded-2xl overflow-hidden border border-purple-700 bg-purple-800/20 shadow-lg h-56 flex items-center justify-center p-6">

            <!-- Contenu texte visible par défaut -->
            <div class="z-10 text-center">
              <h5 class="text-xl font-semibold text-purple-400 mb-2">{{ projet.title }}</h5>
              <p class="text-sm text-gray-400 mb-2">{{ projet.description }}</p>
              <p class="text-xs text-gray-500">{{ projet.tech }}</p>
              <div v-if="projet.link" class="mt-2">
                <router-link :to="projet.link" class="text-purple-700 hover:text-purple-300">{{ projet.title
                }}</router-link>
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
            class="relative group rounded-2xl overflow-hidden border border-purple-700 bg-purple-800/20 shadow-lg h-56 flex items-center justify-center p-6">
            <div class="z-10 text-center">
              <h5 class="text-xl font-semibold text-purple-400 mb-2">{{ projet.title }}</h5>
              <p class="text-sm text-gray-400 mb-2">{{ projet.description }}</p>
              <p class="text-xs text-gray-500">{{ projet.tech }}</p>
              <div v-if="projet.link" class="mt-2">
                <router-link :to="projet.link" class="text-purple-700 hover:text-purple-300">{{ projet.title
                }}</router-link>
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
            class="relative group rounded-2xl overflow-hidden border border-purple-700 bg-purple-800/20 shadow-lg h-56 flex items-center justify-center p-6">
            <div class="z-10 text-center">
              <h5 class="text-xl font-semibold text-purple-400 mb-2">{{ projet.title }}</h5>
              <p class="text-sm text-gray-400 mb-2">{{ projet.description }}</p>
              <p class="text-xs text-gray-500">{{ projet.tech }}</p>
              <div v-if="projet.link" class="mt-2">
                <router-link :to="projet.link" class="text-purple-700 hover:text-purple-300">{{ projet.title
                }}</router-link>
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

// Projets par catégorie
const devProjects = [
  {
    title: "Decrypt’eau",
    description: "Création d'un jeu web pour la maison d'Alsace et de la nature",
    tech: "Symfony / PHP / HTML / CSS / JS / Bootstrap",
    link: "/decrypteau",
    cover: "/src/assets/projects/decrypteau.jpg"
  },
  {
    title: "Jeu Unity",
    description: "Développement d’un jeu 3D avec thèmes évolutifs par niveau.",
    tech: "Unity / C# / Blender",
    link: "",
    cover: "/src/assets/projects/unity-game.jpg"
  },
  {
    title: "Projet CUEJ",
    description: "Site interactif pour le Centre Universitaire d’Enseignement du Journalisme.",
    tech: "PHP / Twig / HTML / SCSS / JS / Bootstrap",
    link: "/cuej",
    cover: "src/assets/CUEJ/cover.png"
  },
  {
    title: "Festival du Haha",
    description: "Identité visuelle complète et mini-site pour un festival fictif.",
    tech: "Illustrator / Figma / HTML / CSS",
    link: "/festival",
    cover: "src/assets/FestivalHaHa/cover.jpeg"
  },
  {
    title: "Musée des années 70",
    description: "Site immersif retraçant la culture et le design des années 1970.",
    tech: "JS / HTML / Tailwind / Unity",
    link: "/musee",
    cover: "src/assets/Musee70/cover.png"
  },
  {
    title: "Borne interactive - Sainte Félicité",
    description: "Borne interactive pour accès à infos locales.",
    tech: "En cours",
    link: "",
    cover: "/src/assets/projects/borne.jpg"
  },
  {
    title: "Escape Game Inca",
    description: "Jeu vidéo Unity basé sur un Escape Game dans un univers Inca.",
    tech: "Unity / C# / Blender",
    link: "",
    cover: "/src/assets/projects/escape-inca.jpg"
  }
];


const graphicProjects = [
  { title: "Charte graphique Alsace Nautile Club", description: "Logo, charte graphique et supports audiovisuels.", tech: "Illustrator / Premiere Pro / Photoshop", link: "/alsace-nautile", cover: "src/assets/AlsaceNautile/cover.png" },
  { title: "Site sobriété énergétique", description: "Site interactif de sensibilisation.", tech: "UX / Stratégie / Design web", link: "/sobriete-energetique", cover: "src/assets/SobEnergetique/cover.png" },
  { title: "CinéStar", description: "Refonte identité visuelle et supports marketing.", tech: "Illustrator / Photoshop / Figma", link: "/cine", cover: "src/assets/cineStar/cover.jpeg" },
  { title: "Escape Bredele", description: "Concept mêlant escape game et atelier cuisine.", tech: "Illustrator / Photoshop / Figma", link: "/bredla", cover: "src/assets/Butterbredla/cover.png" },
  { title: "Festival Au Bonheur des Mômes", description: "Conception d’un flyer pour un événement culturel.", tech: "Illustrator / Photoshop / InDesign", link: "/flyer", cover: "src/assets/Flyer/flyer.png" },
  { title: "Infographie sur l'Espace", description: "Infographie éducative sur l’exploration spatiale.", tech: "Illustrator / Photoshop", link: "/infographie", cover: "src/assets/infographie/cover.jpeg" }
];

const marketingProjects = [
  { title: "STR’A Donuts", description: "Création d’un commerce fictif et communication sur les réseaux sociaux.", tech: "Communication / Réseaux / Branding", link: "/douxnuts", cover: "src/assets/DouxNuts/cover.jpeg" }
];
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Poppins:wght@600;800&display=swap');

.font-inter {
  font-family: 'Inter', sans-serif;
}

.font-poppins {
  font-family: 'Poppins', sans-serif;
}

.fade-in {
  opacity: 0;
  animation: fadeIn 1s forwards;
  animation-delay: 0.2s;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

.animate-fade {
  animation: fade 0.5s ease-in-out;
}

@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
