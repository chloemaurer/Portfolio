<template>

    <div
        class="min-h-screen bg-gradient-to-b from-[#0b0b0d] to-[#1a1a2e] text-white px-6 py-16 relative overflow-x-hidden">
        <!-- Images latérales en background -->
        <div class="fixed inset-y-0 left-0 flex flex-col justify-evenly pl-4 pointer-events-none z-0">
            <img src="../assets/Butterbredla/81732-OGSZYQ-128.png" class="side-img">
            <img src="../assets/Butterbredla/cadeau.png" class="side-img ml-16">
        </div>

        <div class="fixed inset-y-0 right-0 flex flex-col justify-evenly pr-4 pointer-events-none z-0">
            <img src="../assets/Butterbredla/sapin.png" class="side-img -ml-24">
            <img src="../assets/Butterbredla/sucreorge.png" class="side-img mr-10">
        </div>
        <!-- Pluie en arrière-plan -->
        <div class="fixed inset-0 -z-10 overflow-hidden">
            <div v-for="i in 25" :key="i" class="raindrop" :style="{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
                transform: `scale(${0.6 + Math.random() * 0.8}) rotate(${Math.random() * 10 - 5}deg)`
            }"></div>
        </div>

        <section class="max-w-5xl mx-auto text-center relative z-10">
            <h2 class="text-4xl font-bold  mb-4">Escape Bredele</h2>
            <p class="text-gray-300 mb-10">
                Ce projet de création fictive mêle deux passions alsaciennes : le jeu et la gourmandise 🍪
                L’idée : une activité immersive combinant un <strong>escape game</strong> et un <strong>atelier
                    cuisine</strong>, où les participants doivent résoudre des énigmes pour obtenir les ingrédients
                nécessaires à la
                réalisation des Bredele traditionnels. Le concept vise à transmettre la <strong>culture locale</strong>
                de manière ludique et participative.
                <br><br>
                Tout le projet a été conçu et réalisé dans <strong>WordPress</strong>.
            </p>

            <h3 class="text-2xl font-semibold  mb-6">Logo et identité visuelle</h3>
            <img src="../assets/Butterbredla/Frame 2.png" alt="Logo Escape Bredele"
                class="mx-auto rounded-2xl shadow-lg mb-10">

            <h3 class="text-2xl font-semibold  mb-6 mt-10">Mockups</h3>
            <div class="grid md:grid-cols-2 gap-6">
                <img src="../assets/Butterbredla/Mockup facebook.png" alt="Mockup 1" class="rounded-xl border ">
                <img src="../assets/Butterbredla/Mockup Instagram.png" alt="Mockup 2" class="rounded-xl border ">
            </div>

            <h3 class="text-2xl font-semibold  my-8">Maquettes</h3>
            <div class="grid md:grid-cols-4 gap-6">
                <img src="../assets/Butterbredla/Accueil.png" alt="Affiche Escape Bredele" class="rounded-xl border ">
                <img src="../assets/Butterbredla/Informations-1.png" alt="Maquette site ou flyer"
                    class="rounded-xl border ">
                <img src="../assets/Butterbredla/Informations.png" alt="Maquette supplémentaire 1"
                    class="rounded-xl border ">
                <img src="../assets/Butterbredla/Réservation.png" alt="Maquette supplémentaire 2"
                    class="rounded-xl border ">

                <div class="text-center py-8  relative z-10">
                    <router-link to="/" class="mt-12 text-purple-700 hover:text-blue-400 transition">
                        ← Retour au portfolio
                    </router-link>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts"></script>

<style>

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
