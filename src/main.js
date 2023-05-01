import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/fonts/fonts.scss';
import '@/assets/styles/globals.scss';
import '@/assets/styles/variables.scss';
import router from '@/router/router';
import { createPinia } from 'pinia'
import IconSvg from '@/components/IconSvg.vue';
import Vue3Toastify from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const pinia = createPinia()
const app = createApp(App);

app.component('IconSvg', IconSvg);

app.use(router).use(pinia).use(Vue3Toastify).mount('#app');