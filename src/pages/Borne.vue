<template>
    <div
        class="min-h-screen w-full bg-gradient-to-b from-[#0b0b0d] to-[#1a1a2e] text-white font-sans overflow-x-hidden">

        <!-- Introduction -->
        <section class="text-center py-20 px-4">
            <h1
                class="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 uppercase tracking-widest">
                Borne interactive municipale
            </h1>

            <p class="max-w-3xl mx-auto text-gray-300 leading-relaxed bg-white/5 p-6 rounded-xl border border-white/10">
                Cette borne interactive a été conçue pour la ville de Sainte-Félicité (Canada).
                Elle a pour objectif de proposer aux citoyens et aux visiteurs un accès simple,
                clair et attractif à des informations locales et à des contenus numériques.
            </p>
        </section>

        <!-- Objectifs -->
        <section class="py-10 px-6">
            <div class="max-w-6xl mx-auto">
                <div class="bg-white/5 p-8 rounded-2xl border border-white/10">
                    <h2 class="text-3xl font-bold text-blue-300 mb-4 text-center">
                        Objectifs de la borne
                    </h2>

                    <p class="text-gray-300 leading-relaxed mb-6 text-center">
                        La borne a été pensée pour une utilisation autonome dans l’espace public,
                        avec une navigation fluide et une interface accessible à tous.
                    </p>

                    <ul class="grid md:grid-cols-2 gap-4 text-gray-300 max-w-3xl mx-auto">
                        <li>• Accès rapide aux informations municipales</li>
                        <li>• Navigation tactile intuitive</li>
                        <li>• Valorisation du territoire et des services locaux</li>
                        <li>• Expérience adaptée à tous les publics</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Rôle -->
        <section class="py-20 px-6">
            <div class="max-w-6xl mx-auto">
                <h2 class="text-3xl font-bold text-blue-300 mb-6 text-center">
                    Mon rôle dans le projet
                </h2>

                <p class="text-gray-300 max-w-3xl mx-auto text-center leading-relaxed mb-12">
                    J’ai participé à la conception et au développement de la borne interactive,
                    en mettant l’accent sur l’expérience utilisateur, l’ergonomie et la clarté des contenus.
                </p>

                <div class="grid md:grid-cols-2 gap-10">
                    <div class="bg-white/5 p-6 rounded-xl border border-white/10">
                        <h3 class="text-xl font-semibold text-green-300 mb-3">
                            Développement & intégration
                        </h3>
                        <ul class="text-gray-300 list-disc list-inside space-y-2">
                            <li>Développement de l’interface interactive</li>
                            <li>Gestion des interactions tactiles</li>
                            <li>Développement des mini-jeux</li>
                            <li>Optimisation pour borne grand public</li>
                        </ul>
                    </div>

                    <div class="bg-white/5 p-6 rounded-xl border border-white/10">
                        <h3 class="text-xl font-semibold text-green-300 mb-3">
                            UX / UI & accessibilité
                        </h3>
                        <ul class="text-gray-300 list-disc list-inside space-y-2">
                            <li>Conception d’un parcours utilisateur simple</li>
                            <li>Interface lisible et contrastée</li>
                            <li>Hiérarchisation de l’information</li>
                            <li>Adaptation à un contexte municipal</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- Lien -->
        <section class="text-center py-20 px-6">
            <h2 class="text-3xl font-bold text-blue-300 mb-6">
                Accéder à la borne interactive
            </h2>

            <p class="text-gray-300 max-w-2xl mx-auto mb-8">
                Une version en ligne permet de découvrir l’interface et les fonctionnalités de la borne.
            </p>

            <a href="https://projet4.timmatane.ca/2025/efc/eq2/" target="_blank"
                class="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-blue-500 rounded-xl text-white font-bold text-lg transition shadow-lg">
                Voir la borne
            </a>
        </section>

        <!-- Retour -->
        <div class="text-center py-8">
            <router-link to="/" class="text-blue-400 transition font-medium">
                ← Retour au portfolio
            </router-link>
        </div>

    </div>
</template>
