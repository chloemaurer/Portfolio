import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import AlsaceNautile from './pages/AlsaceNautile.vue'
import SobrieteEnergetique from './pages/SobrieteEnergetique.vue'
import Decrypteau from './pages/Decrypteau.vue'
import DouxNuts from './pages/DouxNuts.vue'
import Cuej from './pages/CUEJ.vue'
import musee70 from './pages/Musee70.vue'
import cinestar from './pages/cineStar.vue'
import butterbredla from './pages/ButterBredla.vue'
import flyer from './pages/Flyer.vue'
import festival from './pages/FestivalHaHa.vue'
import infographie from './pages/infographie.vue'
import UnityGame from './pages/Unity.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/alsace-nautile', component: AlsaceNautile },
    { path: '/sobriete-energetique', component: SobrieteEnergetique },
    { path: '/decrypteau', component: Decrypteau },
    { path: '/douxnuts', component: DouxNuts },
    { path: '/cuej', component: Cuej },
    { path: '/musee', component: musee70 },
    { path: '/cine', component: cinestar },
    { path: '/bredla', component: butterbredla },
    { path: '/flyer', component: flyer },
    { path: '/festival', component: festival },
    { path: '/infographie', component: infographie },
    { path: '/unity', component: UnityGame },
]


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router
