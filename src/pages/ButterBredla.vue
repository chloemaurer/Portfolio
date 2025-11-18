<template>
    <div
        class="min-h-screen bg-gradient-to-b from-[#0b0b0d] to-[#1a1a2e] text-white px-6 py-16 relative overflow-x-hidden">
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
                <img src="../assets/Butterbredla/Mockup facebook.png" alt="Mockup 1"
                    class="rounded-xl border ">
                <img src="../assets/Butterbredla/Mockup Instagram.png" alt="Mockup 2"
                    class="rounded-xl border ">
            </div>

            <h3 class="text-2xl font-semibold  mb-6">Maquettes</h3>
            <div class="grid md:grid-cols-4 gap-6">
                <img src="../assets/Butterbredla/Accueil.png" alt="Affiche Escape Bredele"
                    class="rounded-xl border ">
                <img src="../assets/Butterbredla/Informations-1.png" alt="Maquette site ou flyer"
                    class="rounded-xl border ">
                <img src="../assets/Butterbredla/Informations.png" alt="Maquette supplémentaire 1"
                    class="rounded-xl border ">
                <img src="../assets/Butterbredla/Réservation.png" alt="Maquette supplémentaire 2"
                    class="rounded-xl border ">
            </div>
        </section>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped>
/* --- Animation pluie --- */
.raindrop {
    position: absolute;
    top: -10%;
    width: 8px;
    height: 16px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(173, 216, 230, 0.5));
    border-radius: 50% 50% 60% 60%;
    opacity: 0.8;
    animation: fall linear infinite;
    filter: blur(0.4px);
}

/* effet de chute */
@keyframes fall {
    0% {
        transform: translateY(0) scale(1) rotate(0deg);
        opacity: 0.8;
    }

    90% {
        opacity: 1;
    }

    100% {
        transform: translateY(110vh) scale(0.9) rotate(3deg);
        opacity: 0;
    }
}
</style>
