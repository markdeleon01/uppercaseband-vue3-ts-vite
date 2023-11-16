import './assets/main.css'

import { createApp } from 'vue'
import { pinia } from './pinia'

import App from './App.vue'
import router from './router'

import 'nprogress/nprogress.css'


createApp(App).use(pinia).use(router).mount('#app')
