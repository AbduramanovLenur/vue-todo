<template>
    <section class="auth">
        <div class="container">
            <div class="auth__inner">
                <div class="auth__wrapper">
                    <TitleForm>
                    Sign In to your Account
                    </TitleForm>
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
                                :type="isHide ? 'text' : 'password'" 
                                v-model="form.password"
                                placeholder="Password"
                            >
                            <span class="auth__icon">
                                <IconSvg name="lock"/>
                            </span>
                            <span class="auth__hide" @click="toggleActivePassword">
                                <IconSvg name="hide" />
                            </span>
                        </div>
                        <span class="auth__error" v-if="v$.form.password.$error">
                            {{ v$.form.password.$errors[0].$message }}
                        </span>
                        <MyButton class="auth__button">
                            Sign In
                        </MyButton>
                    </form>
                    <FormInfo to="SignUp">
                        <template v-slot:line-text>
                            Or sign in with
                        </template>
                        <template v-slot:question>
                            Don't have an account? 
                        </template>
                        <template v-slot:btn>
                            Sign Up
                        </template>
                    </FormInfo>
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

export default {
    name: "AuthPages",
    data: () => ({
        v$: useVuelidate(),
        form: {
            email: '',
            password: ''
        },
        isHide: false
    }),
    methods: {
        ...mapActions(useAuthStore, ['login']),
        submitForm() {
            this.v$.$validate();
            if (!this.v$.$error) { 
                this.login(this.form);
            }
        },
        toggleActivePassword() {
            this.isHide = !this.isHide;
        }
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
            & ~ .auth__hide {
                top: 20%;
                transform: translateY(20%);
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
    &__hide {
        position: absolute;
        top: 35%;
        transform: translateY(-35%);
        right: 15px;
        cursor: pointer;
    }
    &__error {
        color: #ff0000;
        margin-bottom: 15px;
    }
}

</style>