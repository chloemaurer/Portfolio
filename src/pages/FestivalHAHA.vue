<template>
    <div class="min-h-screen w-full bg-gray-950 text-white font-sans overflow-x-hidden relative">
        <!-- Fond coloré animé -->
        <div class="absolute inset-0 overflow-hidden z-0">
            <div v-for="i in 6" :key="i" class="ribbon" :style="{ '--i': i }"></div>
        </div>

        <!-- Titre principal -->
        <section class="text-center py-20 px-6 relative z-10">
            <h1 class="text-4xl md:text-5xl font-bold mb-6 text-purple-400 drop-shadow-lg">
                Festival du Haha 🎤
            </h1>
            <p class="max-w-3xl mx-auto text-gray-300 leading-relaxed">
                Le <span class="text-purple-300 font-semibold">Festival du Haha</span> est un événement fictif québécois
                entièrement dédié à l’humour, à la musique et à la bonne humeur !
                Découvrez le site officiel en cliquant sur le lien ci-dessous :
            </p>
            <a href="https://dev.timmatane.ca/etudiants/2023/maurerc/FestivalHA-HA-/" target="_blank"
                class="text-purple-300 font-semibold hover:underline">
                Visitez le site officiel du Festival du Haha
            </a>
        </section>

        <!-- Présentation du concept -->
        <section class="py-20 px-6 max-w-6xl mx-auto text-center relative z-10">
            <h2 class="text-3xl font-bold text-purple-400 mb-8">Concept & Design</h2>
            <p class="text-gray-300 max-w-3xl mx-auto mb-12">
                L’objectif était de créer une identité à la fois humoristique et festive, avec des couleurs vives,
                des typographies rondes et des visuels expressifs.
                Le ton du site est léger et complice, à l’image de l’humour québécois !
            </p>

            <div class="flex justify-center">
                <img src="../assets/FestivalHaHa/Moodboard.png" alt="Affiche principale du festival du Haha"
                    class="rounded-xl border border-purple-500/40 shadow-lg hover:scale-105 transition duration-300 w-3/6 ">
            </div>
        </section>

        <!-- Conclusion -->
        <section class="py-16 px-6 text-center relative z-10">
            <p class="text-gray-400 max-w-3xl mx-auto">
                Ce projet m’a permis d’allier <span class="text-purple-300 font-semibold">créativité</span>,
                <span class="text-purple-300 font-semibold">design web</span> et <span
                    class="text-purple-300 font-semibold">développement front-end</span>
                pour imaginer un univers humoristique et musical typiquement québécois.
                Le <span class="text-purple-300 font-semibold">Festival du Haha</span> est une invitation à rire,
                chanter et coder avec le sourire 😄
            </p>
        </section>

        <!-- Retour -->
        <div class="text-center py-8  relative z-10">
            <router-link to="/" class="mt-12 text-purple-700 hover:text-blue-400 transition">
                ← Retour au portfolio
            </router-link>
        </div>
    </div>
</template>

<script setup>
// Page statique — aucune logique dynamique
</script>

<style scoped>
.ribbon {
    position: absolute;
    top: calc(var(--i) * 15%);
    left: -10%;
    width: 150%;
    height: 80px;
    background: linear-gradient(270deg,
            #a855f7,
            #c084fc,
            #9333ea,
            #7e22ce,
            #a855f7);
    background-size: 600% 100%;
    opacity: 0.15;
    animation: moveGradient 12s ease-in-out infinite, wave 8s ease-in-out infinite;
    animation-delay: calc(var(--i) * -2s);
    filter: blur(20px);
    transform: rotate(calc(var(--i) * 8deg));
    border-radius: 40%;
}

@keyframes moveGradient {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}

@keyframes wave {

    0%,
    100% {
        transform: translateY(0) rotate(calc(var(--i) * 8deg));
    }

    50% {
        transform: translateY(-20px) rotate(calc(var(--i) * 8deg));
    }
}

img {
    max-width: 100%;
}
</style>
