<template>
    <section class="auth">
        <div class="container">
            <div class="auth__inner">
                <div class="auth__wrapper">
                    <h2 class="auth__title">
                    Sign In to your Account
                    </h2>
                    <div class="auth__subtitle">
                        Welcome back! Please enter your detail
                    </div>
                    <form class="auth__form" @submit.prevent="submitForm">
                        <div class="auth__input-box">
                            <input 
                                :class="{ 'auth__input': true, 'auth__email': true, 'isError': v$.form.email.$error }"
                                name="email" 
                                type="email" 
                                v-model="form.email"
                                placeholder="Email"
                            >
                            <span class="auth__icon">
                                <IconSvg name="mail"/>
                            </span>
                        </div>
                        <span class="auth__error" v-if="v$.form.email.$error">
                            {{ v$.form.email.$errors[0].$message }}
                        </span>
                        <div class="auth__input-box">
                            <input 
                                :class="{ 'auth__input': true, 'auth__password': true, 'isError': v$.form.password.$error }"
                                name="password" 
                                type="text" 
                                v-model="form.password"
                                placeholder="Password"
                            >
                            <span class="auth__icon">
                                <IconSvg name="lock"/>
                            </span>
                        </div>
                        <span class="auth__error" v-if="v$.form.password.$error">
                            {{ v$.form.password.$errors[0].$message }}
                        </span>
                        <button class="auth__button">
                            Sign In
                        </button>
                    </form>
                    <div class="auth__line"></div>
                    <div class="auth__clue">
                        Or sign in with
                    </div>
                    <div class="auth__question">
                        Don't have an account? <router-link class="auth__sign-up" to="/SignUp">Sign Up</router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useVuelidate } from '@vuelidate/core';
import { required, minLength } from '@vuelidate/validators';
import { useAuthStore } from '@/store/AuthStore.js';
import { toast } from 'vue3-toastify';

export default {
    name: "AuthPages",
    data: () => ({
        v$: useVuelidate(),
        form: {
            email: '',
            password: ''
        }
    }),
    methods: {
        ...mapActions(useAuthStore, ['login']),
        submitForm() {
            this.v$.$validate();
            if (!this.v$.$error) { 
                this.login(this.form);

                const isValid = this.token;

                if (isValid) {
                    toast.success('Вы вошли в аккаунт');
                    this.$router.push('/');
                } else {
                    toast.error('Ошибка');
                }
            }
        },
    },
    computed: {
        ...mapState(useAuthStore, ['token']),
    },
    validations() {
        return {
            form: {
                email: { required, },
                password: { minLength: minLength(8), required }
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.auth {
    background-color: var(--auth-pages-bc);
    &__inner {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding-top: 40px;
        width: 100%;
    }
    &__wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 550px;
        width: 100%;
        background-color: var(--overlay-auth);
        padding: 30px;
        border-radius: 20px;
        @media (max-width: 768px) {
            padding: 30px 20px;
        }
    }
    &__title {
        font-size: 30px;
        font-weight: 700;
        line-height: 1.07;
        margin-bottom: 15px;
        letter-spacing: 0.2px;
        max-width: 350px;
        text-align: center;
        @media (max-width: 768px) {
            font-size: 25px;
        }
        @media (max-width: 480px) {
            font-size: 20px;
        }
    }
    &__subtitle {
        color: #64748B;
        max-width: 300px;
        margin-bottom: 35px;
        text-align: center;
    }
    &__form {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
        margin-bottom: 55px;
        @media (max-width: 768px) {
            margin-bottom: 30px;
        }
    }
    &__input {
        border: 1px solid #E2E8F0;
        border-radius: 12px;
        padding: 15px 50px;
        max-width: 450px;
        width: 100%;
        margin-bottom: 20px;
        @media (max-width: 480px) {
            padding: 15px 25px 15px 50px;
        }
        &::placeholder {
            color: #94A3B8;
        }
        &:focus {
            outline: none;
        }
        &.isError {
            margin-bottom: 10px;
            border: 1px solid #ff0000;
            & + .auth__icon {
                top: 17%;
                transform: translateY(17%);
            }
        }
        &-box {
            position: relative;
            display: flex;
            align-items: center;
            flex-direction: column;
            max-width: 450px;
            width: 100%;
        }
    }
    &__icon {
        position: absolute;
        top: 35%;
        transform: translateY(-35%);
        left: 15px;
    }
    &__error {
        color: #ff0000;
        margin-bottom: 15px;
    }
    &__button {
        font-weight: 700;
        letter-spacing: 0.2px;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--button-signIn);
        border-radius: 12px;
        max-width: 450px;
        width: 100%;
        height: 55px;
        transition: 0.5s;
    }
    &__line {
        border: 0.5px solid #E2E8F0;
        width: 100%;
    }
    &__clue {
        font-size: 14px;
        line-height: 1.3;
        margin-top: -15px;
        margin-bottom: 35px;
        background-color: #fff;
        color: #64748B;
        padding: 5px;
        @media (max-width: 768px) {
            margin-bottom: 20px;
        }
    }
    &__sign-up {
        color: #2563EB;
        font-weight: 700;
    }
}

@media (hover: hover) {
    .auth {
        &__button {
            &:hover {
                background-color: var(--hover-btn-auth);
            }
        }
    }
}
</style>