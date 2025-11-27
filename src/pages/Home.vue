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
      <h2 class="text-5xl md:text-6xl font-extrabold font-poppins text-purple-300 animate-bounce">Salut, moi c’est Chloé
        👋</h2>
      <p class="mt-4 text-gray-300 max-w-2xl text-lg leading-relaxed">
        Étudiante en Intégration Multimédia et de l’Internet au Cégep de Matane, parcours Développement Web.
        Passionnée par la création numérique, le motion design et le développement web.
      </p>
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
        <h4 class="text-2xl font-poppins font-bold text-purple-400 mt-6">Langues</h4>
        <ul class="mt-4 flex flex-wrap gap-4 text-gray-300">
          <li>Français</li>
          <li>Anglais</li>
          <li>Allemand</li>
        </ul>
      </div>
      <div class="flex justify-center md:justify-end">
        <div class="w-60 h-60 rounded-2xl bg-purple-700/20 border border-purple-600 flex items-center justify-center">
          <img src="../assets/photo.jpg" alt="Photo Chloé Maurer" class="rounded-2xl w-full h-full object-cover">
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
      <ul class="space-y-6 text-gray-300">
        <li>
          <p class="font-semibold">Tutrice — Développement Web (2025)</p> Cours de tutorat pour étudiants.
        </li>
        <li>
          <p class="font-semibold">Stage — Électricité de Strasbourg (2025)</p> Réalisation d’un Motion Design et
          interface interactive.
        </li>
        <li>
          <p class="font-semibold">Stage BAFA</p> Encadrement de jeunes enfants, animation en camp de vacances, bivouac.
        </li>
        <li>
          <p class="font-semibold">Job d’été — Boulangerie Maulbecker Maurer (2024)</p> Accueil clients, prise de
          commande, gestion caisse.
        </li>
        <li>
          <p class="font-semibold">Projet personnel — Jeu vidéo (2022)</p> Codage en C et apprentissage en autonomie.
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

    <!-- Projets -->
    <section id="projets" class="px-6 py-20 max-w-6xl mx-auto fade-in">
      <h3 class="text-4xl font-bold text-purple-400 text-center mb-16">Projets réalisés</h3>

      <!-- Développement -->
      <div class="mb-16">
        <h4 class="text-2xl font-semibold text-purple-300 mb-8 border-b border-purple-700 pb-2">Développement</h4>
        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="(projet, i) in devProjects" :key="i"
            class="bg-purple-800/20 border border-purple-700 rounded-2xl p-6 shadow-lg text-gray-200">
            <h5 class="text-xl font-semibold text-purple-400 mb-2">{{ projet.title }}</h5>
            <p class="text-sm text-gray-400 mb-3">{{ projet.description }}</p>
            <p class="text-xs text-gray-500">{{ projet.tech }}</p>
            <li v-if="projet.link">
              <router-link :to="projet.link" class="text-purple-700 hover:text-blue-300">{{ projet.title
                }}</router-link>
            </li>
          </div>
        </div>
      </div>

      <!-- Graphisme -->
      <div class="mb-16">
        <h4 class="text-2xl font-semibold text-purple-300 mb-8 border-b border-purple-700 pb-2">Graphisme</h4>
        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="(projet, i) in graphicProjects" :key="i"
            class="bg-purple-800/20 border border-purple-700 rounded-2xl p-6 shadow-lg text-gray-200">
            <h5 class="text-xl font-semibold text-purple-400 mb-2">{{ projet.title }}</h5>
            <p class="text-sm text-gray-400 mb-3">{{ projet.description }}</p>
            <p class="text-xs text-gray-500">{{ projet.tech }}</p>
            <li v-if="projet.link">
              <router-link :to="projet.link" class="text-purple-700 hover:text-purple-300">{{ projet.title
                }}</router-link>
            </li>
          </div>
        </div>
      </div>

      <!-- Marketing -->
      <div>
        <h4 class="text-2xl font-semibold text-purple-300 mb-8 border-b border-purple-700 pb-2">Marketing</h4>
        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="(projet, i) in marketingProjects" :key="i"
            class="bg-purple-800/20 border border-purple-700 rounded-2xl p-6 shadow-lg text-gray-200">
            <h5 class="text-xl font-semibold text-purple-400 mb-2">{{ projet.title }}</h5>
            <p class="text-sm text-gray-400 mb-3">{{ projet.description }}</p>
            <p class="text-xs text-gray-500">{{ projet.tech }}</p>
            <li v-if="projet.link">
              <router-link :to="projet.link" class="text-purple-700 hover:text-purple-400">{{ projet.title
                }}</router-link>
            </li>
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
import { ref } from "vue";

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
  { title: "Decrypt’eau", description: "Création d'un jeu web pour la maison d'Alsace et de la nature", tech: "Symfony / PHP/ HTML / CSS / JS / Bootstrap", link: "/decrypteau" },
  { title: "Jeu Unity", description: "Développement d’un jeu 3D avec thèmes évolutifs par niveau.", tech: "Unity / C# / Blender", link: "" },
  { title: "Projet CUEJ", description: "Site interactif pour le Centre Universitaire d’Enseignement du Journalisme.", tech: "PHP/ Twig / HTML / SCSS / JS / Bootstrap", link: "/cuej" },
  { title: "Festival du Haha", description: "Identité visuelle complète et mini-site pour un festival fictif.", tech: "Illustrator / Figma / HTML / CSS", link: "/festival" },
  { title: "Musée des années 70", description: "Site immersif retraçant la culture et le design des années 1970.", tech: "JS / HTML / Tailwind / Unity", link: "/musee" },
  { title: "Borne interactive - Sainte Félicité", description: "Borne interactive pour accès à infos locales.", tech: "En cours", link: "" },
  { title: "Escape Game Inca", description: "Jeu vidéo Unity basé sur un Escape Game dans un univers Inca.", tech: "Unity / C# / Blender", link: "" }
];

const graphicProjects = [
  { title: "Charte graphique Alsace Nautile Club", description: "Logo, charte graphique et supports audiovisuels.", tech: "Illustrator / Premiere Pro / Photoshop", link: "/alsace-nautile" },
  { title: "Site sobriété énergétique", description: "Site interactif de sensibilisation.", tech: "UX / Stratégie / Design web", link: "/sobriete-energetique" },
  { title: "CinéStar", description: "Refonte identité visuelle et supports marketing.", tech: "Illustrator / Photoshop / Figma", link: "/cine" },
  { title: "Escape Bredele", description: "Concept mêlant escape game et atelier cuisine.", tech: "Illustrator / Photoshop / Figma", link: "/bredla" },
  { title: "Festival Au Bonheur des Mômes", description: "Conception d’un flyer pour un événement culturel.", tech: "Illustrator / Photoshop / InDesign", link: "/flyer" },
  { title: "Infographie sur l'Espace", description: "Infographie éducative sur l’exploration spatiale.", tech: "Illustrator / Photoshop", link: "/infographie" }
];

const marketingProjects = [
  { title: "STR’A Donuts", description: "Création d’un commerce fictif et communication sur les réseaux sociaux.", tech: "Communication / Réseaux / Branding", link: "/douxnuts" }
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
