import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue'
// @ts-ignore
import router from './router'
import './style.css'

createApp(App).use(router).mount('#app')
