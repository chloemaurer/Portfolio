<template>
    <div
        class="min-h-screen w-full bg-gradient-to-b from-[#0b0b0d] to-[#1a1a2e] text-white font-sans overflow-x-hidden relative">



        <!-- Titre principal -->
        <section class="text-center py-20 px-4 relative z-10">
            <h1 class="text-4xl md:text-5xl font-bold mb-6 text-purple-400">Jeu Unity – Niveau 3</h1>
            <p class="max-w-3xl mx-auto text-gray-300 leading-relaxed">
                Dans un projet Unity réalisé en équipe, nous avons développé un jeu composé de plusieurs niveaux.
                J’ai été en charge du <strong>niveau 3</strong>, un environnement d’îles où le joueur navigue en bateau
                pour
                récupérer des balles cachées et les déposer sur des plateformes colorées.
            </p>
        </section>

        <!-- Description du niveau -->
        <section>
            <div class="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                    <h2 class="text-3xl font-bold text-purple-400 mb-4">Objectif du niveau</h2>
                    <p class="text-gray-300 leading-relaxed mb-4">
                        Le joueur explore plusieurs petites îles en bateau, trouve des balles dissimulées à différents
                        endroits,
                        puis doit les déposer sur la plateforme correspondant à leur couleur. Le niveau mélange
                        exploration,
                        précision et observation.
                    </p>
                    <ul class="list-disc list-inside text-gray-400 space-y-1">
                        <li>Navigation en bateau entre différentes îles</li>
                        <li>Balles cachées dans le décor</li>
                        <li>Plateformes colorées pour valider les objectifs</li>
                        <li>Ambiance sonore et musicale immersive</li>
                    </ul>
                </div>

                <img src="../assets/Unity/level3.png" alt="Aperçu du niveau Unity"
                    class="rounded-xl shadow-lg border border-purple-700">
            </div>
        </section>

        <!-- Mes contributions -->
        <section class="py-20 px-6 relative z-10">
            <div class="max-w-6xl mx-auto">
                <h2 class="text-3xl font-bold text-purple-400 mb-6 text-center">Mon rôle dans le projet</h2>
                <p class="text-gray-300 max-w-3xl mx-auto text-center leading-relaxed mb-12">
                    J’ai participé activement au développement du niveau en gérant la création d’assets, la
                    programmation,
                    l’ambiance sonore et la mise en scène générale.
                </p>

                <div class="grid md:grid-cols-2 gap-10">
                    <div class="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-700 shadow-md">
                        <h3 class="text-xl font-semibold text-purple-300 mb-3">🛠️ Développement</h3>
                        <ul class="text-gray-300 list-disc list-inside space-y-2">
                            <li>Scripts du bateau</li>
                            <li>Gestion des balles et détection des couleurs</li>
                            <li>Système de validation des objectifs</li>
                            <li>Transitions et fin du niveau</li>
                        </ul>
                    </div>

                    <div class="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-700 shadow-md">
                        <h3 class="text-xl font-semibold text-purple-300 mb-3">🎨 Création d’assets</h3>
                        <ul class="text-gray-300 list-disc list-inside space-y-2">
                            <li>Éléments du décor des îles</li>
                            <li>Objets interactifs</li>
                            <li>Modèles simples et textures</li>
                            <li>Optimisation pour WebGL</li>
                        </ul>
                    </div>

                    <div
                        class="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-700 shadow-md md:col-span-2">
                        <h3 class="text-xl font-semibold text-purple-300 mb-3">🎵 Musique & Sound Design</h3>
                        <p class="text-gray-300 leading-relaxed">
                            J’ai également composé la musique du niveau et intégré plusieurs effets sonores pour rendre
                            l’expérience plus immersive.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Lien vers le jeu -->
        <section class="text-center py-20 px-6 relative z-10">
            <h2 class="text-3xl font-bold text-purple-400 mb-6">Tester le jeu</h2>
            <p class="text-gray-300 max-w-2xl mx-auto mb-8">
                Le jeu est disponible en version WebGL. Tu peux accéder directement au niveau via le lien ci-dessous.
            </p>

            <a href="/JeuxUnityTest/index.html" target="_blank"
                class="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl text-white font-semibold text-lg transition">
                🎮 Lancer le jeu Unity
            </a>
        </section>

        <div class="text-center py-8 relative z-10">
            <router-link to="/" class="mt-12 text-purple-700 hover:text-blue-400 transition">
                ← Retour au portfolio
            </router-link>
        </div>
        <!-- Animation vagues et bateau -->
        <div class="wave-container ">
            <div class="wave"> <img src="../assets/unity/vague2.png" alt="vague"></div>
            <img src="../assets/unity/bateau.png" alt="bateau" class="boat" />
        </div>

    </div>
</template>

<style scoped>
/* Vagues animées */


.wave img {
    position: absolute;
    bottom: -5%;
    width: 100%;
    animation: moveWave 10s linear infinite;
}



/* Bateau qui se déplace */
.boat {
    position: absolute;
    bottom: 15px;
    width: 200px;

    animation: sail 15s ease-in-out infinite;
}

@keyframes sail {
    0% {
        left: 0;
        bottom: 15px;
        transform: scaleX(-1);
    }

    25% {
        bottom: -30px;
    }

    50% {
        left: calc(100% - 100px);
        bottom: 15px;
        transform: scaleX(-1);
        
        
    }

    51%{

        transform: scaleX(1);
    }

    75% {
        bottom: -30px;
    }


    100% {
        left: 0;
        bottom: 15px;
        transform: scaleX(1);
    }
}
</style>