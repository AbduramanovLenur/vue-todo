import { defineStore } from 'pinia';
import { auth } from '../firebase/index';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import router from '@/router/router.js';
import { toast } from 'vue3-toastify';

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        token: false,
        user: null
    }),
    actions: {
        async login({ email, password }) {
            try {
                await signInWithEmailAndPassword(auth, email, password);
                this.token = true;

                router.push('/');
                toast.success('Вы вошли в аккаунт');
                console.dir("Вы вошли в аккаунт");
            } catch (error) {
                switch (error.code) {
                    case 'auth/user-not-found':
                        console.dir('User not found');
                        toast.error('Пользователь не найден');
                        break;
                    case 'auth/wrong-password':
                        console.dir('Wrond password');
                        toast.error('Неверный пароль');
                        break;
                    default:
                        console.dir("Something went wrong");
                        toast.error('Ошибка');
                        break;
                }

                return;
            }
        },
        async register({ email, password, name }) {
            try {
                await createUserWithEmailAndPassword(auth, email, password).then(data => {
                    console.dir(data);
                    sendEmailVerification(auth.currentUser)
                });
                this.user = auth.currentUser;
                auth.currentUser.displayName = name;

                toast.success('Вы зарегистрировались');
                router.push('/SignIn');
                console.dir("Пользователь зарегистрирован");
            } catch (error) {
                switch (error.code) {
                    case 'auth/email-already-in-use':
                        toast.error('Почта уже занята');
                        console.dir('Email already in use');
                        break;
                    case 'auth/invalid-email':
                        toast.error('Неверный адрес электронной почты');
                        console.dir('Invalid email');
                        break;
                    case 'auth/operation-not-allowed':
                        toast.error('Операция не разрешена');
                        console.dir('Operation not allowed');
                        break;
                    case 'auth/weak-password':
                        toast.error('Слабый пароль');
                        console.dir('Weak password');
                        break;
                    default:
                        toast.error('Ошибка');
                        console.dir("Something went wrong");
                        break;
                }

                return;
            }
        },
    }
})