import { defineStore } from 'pinia';
import { auth } from '../firebase/index';
import { signInWithEmailAndPassword } from 'firebase/auth';

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

                console.dir("Вы вошли в аккаунт");
            } catch (error) {
                switch (error.code) {
                    case 'auth/user-not-found':
                        console.dir('User not found');
                        this.errorAuth = true;
                        break;
                    case 'auth/wrong-password':
                        console.dir('Wrond password');
                        this.errorAuth = true;
                        break;
                    default:
                        console.dir("Something went wrong");
                        this.errorAuth = true;
                        break;
                }

                return;
            }
        },
    }
})