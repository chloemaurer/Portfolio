<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-b from-[#0b0b0d] to-[#1a1a2e] text-white">

    <!-- Header -->
    <header
      class="sticky top-0 z-50 bg-purple-900/10 backdrop-blur-md p-6 flex justify-between items-center border-b border-purple-700">
      <h1 class="text-3xl font-bold text-purple-400 animate-pulse">Chloé Maurer</h1>
      <nav class="flex gap-6">
        <a href="#profil" class="hover:text-purple-300 transition">Profil</a>
        <a href="#formation" class="hover:text-purple-300 transition">Formation</a>
        <a href="#experience" class="hover:text-purple-300 transition">Expériences</a>
        <a href="#competences" class="hover:text-purple-300 transition">Compétences</a>
        <a href="#projets" class="hover:text-purple-300 transition">Projets</a>
        <a href="#contact" class="hover:text-purple-300 transition">Contact</a>
      </nav>
    </header>

    <!-- Hero -->
    <section class="flex-1 flex flex-col items-center justify-center text-center px-6 py-24">
      <h2 class="text-5xl md:text-6xl font-extrabold text-purple-300 animate-bounce">Salut, moi c’est Chloé 👋</h2>
      <p class="mt-4 text-gray-400 max-w-2xl text-lg">
        Étudiante en Intégration Multimédia et de l’Internet au Cegep de Matane, parcours Développement Web.
        Passionnée de création numérique, motion design et développement web.
      </p>
    </section>

    <!-- Profil -->
    <section id="profil" class="px-4 py-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-center">
      <div>
        <h3 class="text-3xl font-bold text-purple-400 mb-4">Profil</h3>
        <p class="text-gray-400 leading-relaxed">
          Étudiante dans les métiers du multimédia et de l’internet avec aptitudes en gestion de projet,
          stratégie de communication, graphisme, création numérique et développement web.
          Je suis autonome, curieuse, flexible et sociable.
        </p>
        <h4 class="text-2xl font-bold text-purple-800 mt-4">Langues</h4>
        <ul class="mt-4 flex flex-wrap gap-4 text-gray-400">
          <li>Français</li>
          <li>Anglais</li>
          <li>Allemand</li>
        </ul>
      </div>
      <div class="flex justify-center md:justify-end">
        <div
          class="w-60 h-60 rounded-2xl bg-purple-700/20 border border-purple-600 flex items-center justify-center text-purple-200 text-xl font-bold">
          <img src="../assets/photo.jpg" alt="photo moi"
            class=" rounded-2xl bg-purple-700/20 border border-purple-600 ">
        </div>
      </div>
    </section>

    <!-- Télécharger mon CV -->
    <section id="cv" class="px-6 py-20 text-center border-t border-purple-700">
      <h3 class="text-3xl font-bold text-purple-400 mb-6">Mon CV</h3>
      <p class="text-gray-400 mb-8">Tu peux télécharger mon CV en cliquant sur le bouton ci-dessous 👇</p>

      <a href="/cv-chloe-maurer.pdf" download="Chloe_Maurer_CV.pdf"
        class="inline-flex items-center gap-2 px-6 py-3 bg-purple-900 rounded-2xl hover:bg-purple-700 transition transform hover:scale-105 text-white">
        <svg xmlns=" http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
        </svg>
        Télécharger mon CV
      </a>
    </section>

    <!-- Formation -->
    <section id="formation" class="px-6 py-20 bg-gray-800">
      <h3 class="text-3xl font-bold text-purple-400 text-center mb-12">Formation</h3>
      <p class="max-w-4xl mx-auto space-y-6 text-gray-400 font-semibold text-center">
        DEC Intégration Multimédia et de l’Internet, Cegep de Matane<br>
        Parcours : Développement Web — 2023 - 2026
      </p>
    </section>

    <!-- Expériences -->
    <section id="experience" class="px-6 py-20 max-w-6xl mx-auto">
      <h3 class="text-3xl font-bold text-purple-400 text-center mb-12">Expériences</h3>
      <ul class="space-y-6 text-gray-400">
        <li>
          <p class="font-semibold">Tutrice — Développement Web (2025)</p><br>
          Cours de tutorat pour étudiants.
        </li>
        <li>
          <p class="font-semibold">Stage — Électricité de Strasbourg (2025)</p><br>
          Réalisation d’un Motion Design et d’une interface interactive.
        </li>
        <li>
          <p class="font-semibold">Stage BAFA</p><br>
          Encadrement de jeunes enfants, animation en camp de vacances, bivouac.
        </li>
        <li>
          <p class="font-semibold">Job d’été — Boulangerie Maulbecker Maurer (2024)</p><br>
          Accueil clients, prise de commande, conseil sur les produits, gestion de la caisse.
        </li>
        <li>
          <p class="font-semibold">Projet personnel — Jeu vidéo (2022)</p><br>
          Codage en C et apprentissage en autonomie.
        </li>
      </ul>
    </section>

    <!-- Compétences -->
    <section id="competences" class="px-6 py-20 bg-gray-900">
      <h3 class="text-3xl font-bold text-purple-400 text-center mb-12">Compétences</h3>
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <p class="px-4 py-2 bg-purple-700/20 border border-purple-600 rounded-full animate-pulse">Autonome</p>
        <p class="px-4 py-2 bg-purple-700/20 border border-purple-600 rounded-full animate-pulse delay-75">Flexible</p>
        <p class="px-4 py-2 bg-purple-700/20 border border-purple-600 rounded-full animate-pulse delay-150">Curieuse</p>
        <p class="px-4 py-2 bg-purple-700/20 border border-purple-600 rounded-full animate-pulse delay-200">Polyvalente
        </p>
        <p class="px-4 py-2 bg-purple-700/20 border border-purple-600 rounded-full animate-pulse delay-300">Sociale</p>
      </div>
      <h3 class="text-3xl font-bold text-purple-400 text-center mb-12">Loisirs</h3>
      <div class="flex flex-wrap justify-center gap-4 text-violet-50">
        <p class="px-4 py-2 bg-purple-700/20 border border-purple-600 rounded-full">Jeux vidéos</p>
        <p class="px-4 py-2 bg-purple-700/20 border border-purple-600 rounded-full">Films</p>
        <p class="px-4 py-2 bg-purple-700/20 border border-purple-600 rounded-full">Séries</p>
        <p class="px-4 py-2 bg-purple-700/20 border border-purple-600 rounded-full">Escape Game</p>
        <p class="px-4 py-2 bg-purple-700/20 border border-purple-600 rounded-full">Énigmes</p>
        <p class="px-4 py-2 bg-purple-700/20 border border-purple-600 rounded-full">Cuisine</p>
      </div>
    </section>

    <!-- Projets -->
    <section id="projets" class="px-6 py-20 max-w-6xl mx-auto">
      <h3 class="text-4xl font-bold text-purple-400 text-center mb-16">Projets réalisés</h3>

      <!-- Catégorie : Développement -->
      <div class="mb-16">
        <h4 class="text-2xl font-semibold text-purple-300 mb-8 border-b border-purple-700 pb-2">Développement</h4>
        <div class="grid md:grid-cols-3 gap-6">


          <div class="bg-purple-800/20 border border-purple-700 rounded-2xl p-6 shadow-lg text-gray-200">
            <h5 class="text-xl font-semibold text-purple-400 mb-2">Decrypt’eau</h5>
            <p class="text-sm text-gray-400 mb-3">création d'un jeu web pour la maison d'Alsace et de la nature</p>
            <p class="text-xs text-gray-500">Symfony / JS</p>
            <li>
              <router-link to="/decrypteau" class="hover:text-blue-300">
                Decrypt’eau (Jeu interactif)
              </router-link>
            </li>

          </div>

          <div class="bg-purple-800/20 border border-purple-700 rounded-2xl p-6 shadow-lg text-gray-200">
            <h5 class="text-xl font-semibold text-purple-400 mb-2">Jeu Unity</h5>
            <p class="text-sm text-gray-400 mb-3">Développement d’un jeu 3D avec thèmes évolutifs par niveau.</p>
            <p class="text-xs text-gray-500">Unity / C# / Blender</p>
            <a href="">Lien vers le Jeux</a>
          </div>

          <div class="bg-purple-800/20 border border-purple-700 rounded-2xl p-6 shadow-lg text-gray-200">
            <h5 class="text-xl font-semibold text-purple-400 mb-2">Projet CUEJ</h5>
            <p class="text-sm text-gray-400 mb-3">
              Réalisation d’un site interactif pour le Centre Universitaire d’Enseignement du Journalisme,
              mettant en valeur des productions multimédias étudiantes.
            </p>
            <p class="text-xs text-gray-500">HTML / CSS / JavaScript / UX Design</p>
            <li>
              <router-link to="/cuej" class="hover:text-blue-300">
                site CUEJ (Projet CUEJ)
              </router-link>
            </li>
          </div>

          <div class="bg-purple-800/20 border border-purple-700 rounded-2xl p-6 shadow-lg text-gray-200">
            <h5 class="text-xl font-semibold text-purple-400 mb-2">Festival du Haha</h5>
            <p class="text-sm text-gray-400 mb-3">
              Conception d’une identité visuelle complète et d’un mini-site pour un festival fictif d’humour,
              avec mise en avant des artistes et billetterie.
            </p>
            <p class="text-xs text-gray-500">Illustrator / Figma / HTML / CSS / Bootstrap</p>
            <li>
              <router-link to="/festival" class="hover:text-purple-400">
                Festival du Haha (Projet Festival)
              </router-link>
            </li>
          </div>

          <div class="bg-purple-800/20 border border-purple-700 rounded-2xl p-6 shadow-lg text-gray-200">
            <h5 class="text-xl font-semibold text-purple-400 mb-2">Musée des années 70</h5>
            <p class="text-sm text-gray-400 mb-3">
              Création d’un site immersif retraçant la culture et le design des années 1970,
              avec intégration d'un jeu intéractif et d’éléments visuels rétro.
            </p>
            <p class="text-xs text-gray-500">JS / HTML / Tailwind -- C# / Unity</p>
            <router-link to="/musee" class="hover:text-purple-400">
              Musée des années 70
            </router-link>
          </div>

          <div class="bg-purple-800/20 border border-purple-700 rounded-2xl p-6 shadow-lg text-gray-200">
            <h5 class="text-xl font-semibold text-purple-400 mb-2">Borne interactive - Sainte Félicité</h5>
            <p class="text-sm text-gray-400 mb-3">
              Développement d’une borne interactive pour la commune de Sainte Félicité, permettant d’accéder à des
              informations locales et services.
            </p>
            <p class="text-xs text-gray-500">En cours de développement</p>
          </div>

          <div class="bg-purple-800/20 border border-purple-700 rounded-2xl p-6 shadow-lg text-gray-200">
            <h5 class="text-xl font-semibold text-purple-400 mb-2">Escape Game Inca</h5>
            <p class="text-sm text-gray-400 mb-3">
              Développement d’un jeu vidéo sur Unity avec des assets créés sous Blender, basé sur un Escape Game dans un
              univers inca.
            </p>
            <p class="text-xs text-gray-500">Unity / C# / Blender</p>

          </div>


        </div>
      </div>

      <!-- Catégorie : Graphisme -->
      <div class="mb-16">
        <h4 class="text-2xl font-semibold text-purple-300 mb-8 border-b border-purple-700 pb-2">Graphisme</h4>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-purple-800/20 border border-purple-700 rounded-2xl p-6 shadow-lg text-gray-200">
            <h5 class="text-xl font-semibold text-purple-400 mb-2">Charte graphique Alsace Nautile Club</h5>
            <p class="text-sm text-gray-400 mb-3">Création d’un logo, d’une charte graphique et de supports
              audiovisuels.</p>
            <p class="text-xs text-gray-500">Illustrator / Premiere Pro / Photoshop</p>
            <li>
              <router-link to="/alsace-nautile" class="hover:text-blue-300">
                alsace Nautile Club (Projet ANC)
              </router-link>
            </li>
          </div>
          <div class="bg-purple-800/20 border border-purple-700 rounded-2xl p-6 shadow-lg text-gray-200">
            <h5 class="text-xl font-semibold text-purple-400 mb-2">Site sur la sobriété énergétique</h5>
            <p class="text-sm text-gray-400 mb-3">Réalisation d’un site interactif de sensibilisation.</p>
            <p class="text-xs text-gray-500">UX / Stratégie / Design web</p>
            <li>
              <router-link to="/sobriete-energetique" class="hover:text-orange-400">
                Sobriété énergétique (SAE303)
              </router-link>
            </li>

          </div>
          <div class="bg-purple-800/20 border border-purple-700 rounded-2xl p-6 shadow-lg text-gray-200">
            <h5 class="text-xl font-semibold text-purple-400 mb-2">CinéStar</h5>
            <p class="text-sm text-gray-400 mb-3">Refonte de l’identité visuelle et création de supports
              marketing pour une chaîne de cinémas fictive.</p>
            <p class="text-xs text-gray-500">Illustrator / Photoshop / Figma</p>
            <li>
              <router-link to="/cine" class="hover:text-purple-400">
                CinéStar (Projet Cinéma)
              </router-link>
            </li>
          </div>

          <div class="bg-purple-800/20 border border-purple-700 rounded-2xl p-6 shadow-lg text-gray-200">
            <h5 class="text-xl font-semibold text-purple-400 mb-2">Escape Bredele</h5>
            <p class="text-sm text-gray-400 mb-3">Création d’un concept mêlant escape game et atelier cuisine,
              avec logo et supports visuels.</p>
            <p class="text-xs text-gray-500">Illustrator / Photoshop / Figma</p>
            <li>
              <router-link to="/bredla" class="hover:text-purple-400">
                Escape Bredele (Projet Escape Game)
              </router-link>
            </li>
          </div>
          <div class="bg-purple-800/20 border border-purple-700 rounded-2xl p-6 shadow-lg text-gray-200">
            <h5 class="text-xl font-semibold text-purple-400 mb-2">festival Au Bonheur des Mômes</h5>
            <p class="text-sm text-gray-400 mb-3">Conception d’un flyer pour un événement culturel.</p>
            <p class="text-xs text-gray-500">Illustrator / Photoshop / InDesign</p>
            <li>
              <router-link to="/flyer" class="hover:text  -purple-400">
                Flyer
              </router-link>
            </li>
          </div>
            <div class="bg-purple-800/20 border border-purple-700 rounded-2xl p-6 shadow-lg text-gray-200">
            <h5 class="text-xl font-semibold text-purple-400 mb-2">Infographie sur l'Espace</h5>
            <p class="text-sm text-gray-400 mb-3">Création d’une infographie éducative sur l’exploration spatiale et les découvertes scientifiques.</p>
            <p class="text-xs text-gray-500">Illustrator / Photoshop</p>
            <li>
              <router-link to="/infographie" class="hover:text-purple-400">
              Infographie Espace
              </router-link>
            </li>
            </div>
        </div>
      </div>

      <!-- Catégorie : Marketing -->
      <div>
        <h4 class="text-2xl font-semibold text-purple-300 mb-8 border-b border-purple-700 pb-2">Marketing</h4>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-purple-800/20 border border-purple-700 rounded-2xl p-6 shadow-lg text-gray-200">
            <h5 class="text-xl font-semibold text-purple-400 mb-2">STR’A Donuts</h5>
            <p class="text-sm text-gray-400 mb-3">Création d’un commerce fictif et communication sur les réseaux
              sociaux.</p>
            <p class="text-xs text-gray-500">Communication / Réseaux / Branding</p>
            <li>
              <router-link to="/douxnuts" class="hover:text-purple-400">
                Doux Nuts (Projet STRA3)
              </router-link>
            </li>

          </div>

        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="px-6 py-20 text-center">
      <h3 class="text-3xl font-bold text-purple-400 mb-6">Me contacter</h3>
      <p class="text-gray-400 mb-6">
        ✉️ chloe29.maurer@gmail.com<br />
        📞 +33 7 68 90 72 09<br />
        📍 598 avenue St Rédempteur, G4W 0H2 Matane, Québec
      </p>

      <form ref="contactForm" @submit.prevent="sendForm" class="flex flex-col max-w-md mx-auto gap-4">
        <input type="text" name="nom" placeholder="Nom" required
          class="px-4 py-2 rounded-lg border border-purple-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-purple-400" />
        <input type="email" name="email" placeholder="Email" required
          class="px-4 py-2 rounded-lg border border-purple-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-purple-400" />
        <textarea name="message" placeholder="Message" required
          class="px-4 py-2 rounded-lg border border-purple-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"></textarea>

        <button type="submit" class="px-6 py-3 bg-purple-600 rounded-2xl hover:bg-purple-500 transition">
          Envoyer
        </button>
      </form>

      <!-- Messages de succès / erreur -->
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
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      successMessage.value = "Message envoyé avec succès !";
      contactForm.value.reset();
    } else {
      errorMessage.value = "Erreur lors de l’envoi du message 😕";
    }
  } catch (error) {
    errorMessage.value = "Impossible d’envoyer le message 😕";
  }

  setTimeout(() => {
    successMessage.value = "";
    errorMessage.value = "";
  }, 4000);
};
</script>

<style scoped>
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

.animate-fade {
  animation: fade 0.5s ease-in-out;
}
</style>