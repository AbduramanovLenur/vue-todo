import { createRouter, createWebHistory } from 'vue-router';
import AuthPages from '@/pages/AuthPages.vue';
import { useAuthStore } from '@/store/AuthStore.js';

const routes = [
    {
        name: 'Auth',
        path: '/SignIn',
        component: AuthPages,
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
        next('/SingIn');
    } else {
        next();
    }
})

export default router;