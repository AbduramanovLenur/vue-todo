import { createApp } from 'vue';
import App from './App.vue';
import '@/assets/fonts/fonts.scss';
import '@/assets/styles/globals.scss';
import '@/assets/styles/variables.scss';
import router from '@/router/router';
import { createPinia } from 'pinia';
import IconSvg from '@/components/IconSvg.vue';
import TitleForm from '@/components/TitleForm.vue';
import FormInfo from '@/components/FormInfo.vue';
import MyButton from '@/components/MyButton.vue';
import MyInput from '@/components/MyInput.vue';
import Vue3Toastify from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const pinia = createPinia();
const app = createApp(App);

app
    .component('IconSvg', IconSvg)
    .component('TitleForm', TitleForm)
    .component('FormInfo', FormInfo)
    .component('MyButton', MyButton)
    .component('MyInput', MyInput);

app
    .use(router)
    .use(pinia)
    .use(Vue3Toastify)
    .mount('#app');