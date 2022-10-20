import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import Controls from '@/components/controls'
import 'normalize.css'
import './style.scss'

const app = createApp(App)
app.use(createPinia()).use(router).use(Controls)
app.mount('#app')
