<template>
    <div class="min-h-screen bg-gradient-to-b from-[#0b0b0d] to-[#1a1a2e] text-white px-6 py-16">
        <section class="max-w-5xl mx-auto text-center">
            <h2 class="text-4xl font-bold text-yellow-400 mb-4">Refonte du Cinéma Star</h2>
            <p class="text-gray-300 mb-10">
                Ce projet consistait à repenser l’identité visuelle et la communication du Cinéma Star,
                un cinéma indépendant emblématique de Strasbourg.
                L’objectif était de moderniser l’image tout en conservant l’esprit chaleureux et culturel du lieu.
            </p>

            <h3 class="text-2xl font-semibold text-yellow-300 mb-6">Nouveau logo</h3>
            <img src="../assets/cineStar/logo.png" alt="Logo Cinéma Star"
                class="mx-auto rounded-2xl shadow-lg mb-10 w-64">

            <h3 class="text-2xl font-semibold text-yellow-300 mb-6">Maquettes du site</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 ">
                <!-- Maquettes mobile -->
                <img src="../assets/cineStar/PhoneAccueil.png" alt="Maquette mobile accueil"
                    class="rounded-xl border border-purple-500/40 shadow-lg w-32 hover:scale-105 transition duration-300">
                <img src="../assets/cineStar/PhoneDescription.png" alt="Maquette mobile film"
                    class="rounded-xl border border-purple-500/40 shadow-lg w-32 hover:scale-105 transition duration-300">
                <img src="../assets/cineStar/PhoneInfos.png" alt="Maquette mobile infos"
                    class="rounded-xl border border-purple-500/40 shadow-lg w-32 hover:scale-105 transition duration-300">

                <!-- Maquettes desktop -->
                <img src="../assets/cineStar/Accueil.png" alt="Maquette desktop accueil"
                    class="rounded-xl border border-purple-500/40 shadow-lg w-56 hover:scale-105 transition duration-300">
                <img src="../assets/cineStar/Description.png" alt="Maquette desktop film"
                    class="rounded-xl border border-purple-500/40 shadow-lg w-56 hover:scale-105 transition duration-300">
                <img src="../assets/cineStar/Infos.png" alt="Maquette desktop infos"
                    class="rounded-xl border border-purple-500/40 shadow-lg w-56 hover:scale-105 transition duration-300">
            </div>

            <div class="text-center py-8  relative z-10">
                <router-link to="/" class="mt-12 text-purple-700 hover:text-blue-400 transition">
                    ← Retour au portfolio
                </router-link>
            </div>
        </section>
    </div>
</template>
