<template>
    <div class="min-h-screen w-full bg-gray-950 text-white font-sans overflow-x-hidden relative">
        <!-- Titre principal -->
        <section class="text-center py-20 px-6 relative z-10">
            <h1 class="text-4xl md:text-5xl font-bold mb-6 text-purple-400 drop-shadow-lg">
                Infographie — Les grandes découvertes spatiales 🚀
            </h1>
            <p class="max-w-3xl mx-auto text-gray-300 leading-relaxed">
                Cette infographie retrace les moments clés de la conquête spatiale,
                des premiers pas de Spoutnik jusqu’aux missions modernes vers Mars.
                J’ai voulu créer un visuel à la fois <span class="text-purple-300 font-semibold">pédagogique</span>,
                <span class="text-purple-300 font-semibold">immersif</span> et <span
                    class="text-purple-300 font-semibold">futuriste</span>,
                mêlant illustrations vectorielles et mise en page chronologique.
            </p>
        </section>

        <!-- Présentation du concept -->
        <section class="py-20 px-6 max-w-6xl mx-auto text-center relative z-10">
            <h2 class="text-3xl font-bold text-purple-400 mb-8">Concept & Design</h2>
            <p class="text-gray-300 max-w-3xl mx-auto mb-12">
                L’objectif était de vulgariser l’histoire spatiale tout en la rendant visuellement attractive.
                J’ai utilisé un style illustratif avec des teintes sombres et des lueurs néon pour rappeler
                l’univers intersidéral et les technologies de pointe.
                Chaque section de la frise représente une étape marquante de la découverte spatiale.
            </p>

            <div class="flex justify-center ">
                <img src="../assets/infographie/art_final-1.png" alt="Infographie"
                    class="rounded-xl border border-purple-500/40 w-2xl shadow-lg hover:scale-105 transition duration-300">

            </div>
        </section>


        <!-- Retour -->
        <div class="text-center py-10 relative z-10">
            <router-link to="/" class="text-gray-300 hover:text-purple-400 transition">
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
            #3b82f6,
            #a855f7,
            #7e22ce,
            #60a5fa,
            #3b82f6);
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
