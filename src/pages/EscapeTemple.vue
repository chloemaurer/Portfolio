<template>
    <div
        class="min-h-screen w-full bg-gradient-to-b from-[#0b0b0d] to-[#1a1a2e] text-white font-sans overflow-x-hidden relative">

        <div class="leaves-container pointer-events-none z-20">
            <img src="../assets/Temple/feuille.png" alt="feuille décorative" class="leaf leaf-tl" />
            <img src="../assets/Temple/feuille.png" alt="feuille décorative" class="leaf leaf-tr" />
            <img src="../assets/Temple/feuille.png" alt="feuille décorative" class="leaf leaf-bl" />
            <img src="../assets/Temple/feuille.png" alt="feuille décorative" class="leaf leaf-br" />
        </div>
        <section class="text-center py-20 px-4 relative z-10">
            <h1
                class="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-green-400 uppercase tracking-widest filter drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                Escape Room : Le Temple Oublié
            </h1>
            <p
                class="max-w-3xl mx-auto text-gray-300 leading-relaxed bg-purple-900/20 backdrop-blur-sm p-6 rounded-xl border border-purple-700/50 shadow-[0_0_30px_rgba(0,0,0,0.3)]">
                Dans ce projet Unity réalisé en équipe, nous avons conçu une expérience d'évasion immersive.
                Le joueur se retrouve piégé dans un temple inca envahi par la végétation et doit résoudre des énigmes
                ancestrales pour s'échapper avant que le temple ne s'effondre.
            </p>
        </section>

        <section>
            <div class="max-w-6xl mx-auto py-10 px-6 flex justify-center gap-12 items-center text-center relative z-10">
                <div
                    class="bg-purple-900/30 p-8 rounded-3xl border border-purple-500/30 hover:border-green-500/50 transition-colors duration-500 shadow-2xl backdrop-blur-md">
                    <h2 class="text-3xl font-bold text-purple-300 mb-4 text-center">Objectifs de l'Escape Room</h2>
                    <p class="text-gray-300 leading-relaxed mb-6">
                        L'exploration est cruciale. Le joueur doit fouiller l'environnement pour trouver des indices
                        cachés dans la pierre ou sous les feuilles.
                    </p>
                    <ul class="grid md:grid-cols-2 gap-4 text-left text-gray-400">
                        <li class="flex items-center gap-2"><span
                                class="text-green-400 drop-shadow-[0_0_5px_rgba(74,222,128,0.8)]">◈</span> Résolution de
                            puzzles mécaniques</li>
                        <li class="flex items-center gap-2"><span
                                class="text-green-400 drop-shadow-[0_0_5px_rgba(74,222,128,0.8)]">◈</span> Collecte
                            d'artefacts (Inventaire)</li>
                        <li class="flex items-center gap-2"><span
                                class="text-green-400 drop-shadow-[0_0_5px_rgba(74,222,128,0.8)]">◈</span> Activation de
                            mécanismes antiques</li>
                        <li class="flex items-center gap-2"><span
                                class="text-green-400 drop-shadow-[0_0_5px_rgba(74,222,128,0.8)]">◈</span> Ambiance
                            sonore immersive (Jungle & Temple)</li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="py-20 px-6 relative z-10">
            <div class="max-w-6xl mx-auto">
                <h2 class="text-3xl font-bold text-purple-400 mb-6 text-center">Mon rôle dans le projet</h2>
                <p class="text-gray-300 max-w-3xl mx-auto text-center leading-relaxed mb-12">
                    J’ai principalement travaillé sur la programmation des interactions et l'intégration des assets 3D
                    dans la scène Unity.
                </p>

                <div class="grid md:grid-cols-2 gap-10">
                    <div
                        class="bg-purple-900/20 backdrop-blur-md p-6 rounded-2xl border border-purple-700/50 shadow-md hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition">
                        <h3 class="text-xl font-semibold text-purple-300 mb-3">Programmation C#</h3>
                        <ul class="text-gray-300 list-disc list-inside space-y-2">
                            <li>Système d'interaction (Raycast)</li>
                            <li>Gestion de l'inventaire d'objets</li>
                            <li>Logique de la porte finale (conditions de victoire)</li>
                            <li>Scripts des leviers et plaques de pression</li>
                        </ul>
                    </div>

                    <div
                        class="bg-purple-900/20 backdrop-blur-md p-6 rounded-2xl border border-purple-700/50 shadow-md hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition">
                        <h3 class="text-xl font-semibold text-purple-300 mb-3">Intégration & Level Art</h3>
                        <ul class="text-gray-300 list-disc list-inside space-y-2">
                            <li>Placement des assets dans la scène</li>
                            <li>Création des prefabs interactifs</li>
                            <li>Éclairage de la scène (ambiance mystérieuse)</li>
                            <li>Ajout de végétation pour "habiller" le temple</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section class="text-center py-20 px-6 relative z-10">
            <h2 class="text-3xl font-bold text-purple-400 mb-6">Tenter l'évasion</h2>
            <p class="text-gray-300 max-w-2xl mx-auto mb-8">
                Le temple vous attend. Lancez la version WebGL directement dans votre navigateur.
            </p>

            <a href="https://dev.timmatane.ca/etudiants/2023/maurerc/Temple%20Escape/" target="_blank"
                class="group inline-flex items-center gap-2 px-8 py-4 bg-purple-700 hover:bg-purple-600 rounded-xl text-white font-bold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(74,222,128,0.6)]">
                <span class="group-hover:rotate-12 transition-transform duration-300">🦎</span> Entrer dans le Temple
            </a>
        </section>

        <div class="text-center py-8 relative z-10">
            <router-link to="/" class="mt-12 text-purple-500 transition font-medium">
                ← Retour au portfolio
            </router-link>
        </div>

    </div>
</template>

<style scoped>
/* Conteneur des feuilles */
.leaves-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
    overflow: hidden;
}

.leaf {
    position: absolute;
    width: 300px;
    /* Ajuster selon la taille de tes images */
    opacity: 0.7;
    filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.5));
    animation: sway 6s ease-in-out infinite alternate;
}

/* Positionnement des 4 feuilles */
.leaf-tl {
    top: -50px;
    left: -50px;
    transform: rotate(250deg);
}

.leaf-tr {
    top: -50px;
    right: -50px;
    transform: rotate(-10deg) scaleX(-1);
}

.leaf-bl {
    bottom: -50px;
    left: -50px;
    transform: rotate(-20deg);
}

.leaf-br {
    bottom: -50px;
    right: -50px;
    transform: rotate(20deg) scaleX(-1);
}

/* Animation de balancement doux */
@keyframes sway {
    0% {
        transform: rotate(0deg) translateY(0px);
    }

    100% {
        transform: rotate(5deg) translateY(15px);
    }
}

.leaf-tl{
    animation-name: sway-reverse-down;
}
.leaf-tr {
  animation-name: sway-down;  
}
/* On adapte l'animation pour les feuilles de droite (inversées) */

.leaf-br {
    animation-name: sway-reverse;
}

@keyframes sway-reverse {
    0% {
        transform: scaleX(-1) rotate(0deg) translateY(0px);
    }

    100% {
        transform: scaleX(-1) rotate(5deg) translateY(15px);
    }
}

@keyframes sway-reverse-down {
    0% {
        transform: scaleX(-1) rotate(180deg) translateY(0px);
    }

    100% {
        transform: scaleX(-1) rotate(185deg) translateY(15px);
    }
}

@keyframes sway-down {
    0% {
        transform: scaleX(1) rotate(180deg) translateY(0px);
    }

    100% {
        transform: scaleX(1) rotate(185deg) translateY(15px);
    }
}

/* Responsive : On réduit la taille des feuilles sur mobile */
@media (max-width: 768px) {
    .leaf {
        width: 150px;
    }
}
</style>