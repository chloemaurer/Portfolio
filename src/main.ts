import { createApp } from 'vue'
// @ts-ignore
import Home from './App.vue'
// @ts-ignore
import router from './router'
import './style.css'

createApp(Home).use(router).mount('#app')
