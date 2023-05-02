import { createRouter, createWebHistory } from 'vue-router';
import MainPages from '@/pages/MainPages.vue';
import AuthPages from '@/pages/AuthPages.vue';
import SignUpPages from '@/pages/SignUpPages.vue';
import { useAuthStore } from '@/store/AuthStore.js';

const routes = [
    {
        name: 'Home',
        path: '/',
        component: MainPages,
        meta: {
            auth: true
        }
    },
    {
        name: 'Auth',
        path: '/SignIn',
        component: AuthPages,
        meta: {
            auth: false
        }
    },
    {
        name: 'SignUp',
        path: '/SignUp',
        component: SignUpPages,
        meta: {
            auth: false
        }
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    // проверяет свойство meta.auth для авторизации в роутере
    const store = useAuthStore();
    const requiteAuth = to.matched.some(record => record.meta.auth);

    if (!store.token && requiteAuth) {
        next('/SignUp');
    } else {
        next();
    }
})

export default router;