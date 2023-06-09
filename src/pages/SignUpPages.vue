<template>
    <section class="sign-up">
        <div class="container">
            <div class="sign-up__inner">
                <div class="sign-up__wrapper">
                    <TitleForm>
                        Sign Up for an Account
                    </TitleForm>
                    <form class="sign-up__form" @submit.prevent="submitForm">
                        <div class="sign-up__input-box">
                            <input 
                                :class="{ 'sign-up__input': true, 'isError': v$.form.name.$error }" 
                                name="name"
                                type="text" 
                                v-model="form.name" 
                                placeholder="Name"
                            >
                            <span class="sign-up__icon">
                                <IconSvg name="user" />
                            </span>
                        </div>
                        <span class="sign-up__error" v-if="v$.form.name.$error">
                            {{ v$.form.name.$errors[0].$message }}
                        </span>
                        <div class="sign-up__input-box">
                            <input 
                                :class="{ 'sign-up__input': true, 'isError': v$.form.email.$error }" 
                                name="email"
                                type="email" 
                                v-model="form.email" 
                                placeholder="Email"
                            >
                            <span class="sign-up__icon">
                                <IconSvg name="mail" />
                            </span>
                        </div>
                        <span class="sign-up__error" v-if="v$.form.email.$error">
                            {{ v$.form.email.$errors[0].$message }}
                        </span>
                        <div class="sign-up__input-box">
                            <input 
                                :class="{ 'sign-up__input': true, 'isError': v$.form.password.$error }" 
                                name="password"
                                :type="isHide ? 'text' : 'password'" 
                                v-model="form.password" 
                                placeholder="Password"
                            >
                            <span class="sign-up__icon">
                                <IconSvg name="lock" />
                            </span>
                            <span class="sign-up__hide" @click="toggleActivePassword">
                                <IconSvg name="hide" />
                            </span>
                        </div>
                        <span class="sign-up__error" v-if="v$.form.password.$error">
                            {{ v$.form.password.$errors[0].$message }}
                        </span>
                        <MyButton class="sign-up__button">
                            Sign Up
                        </MyButton>
                    </form>
                    <FormInfo to="SignIn">
                        <template v-slot:line-text>
                            Or sign up with
                        </template>
                        <template v-slot:question>
                            Already have an account? 
                        </template>
                        <template v-slot:btn>
                            Login
                        </template>
                    </FormInfo>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapActions } from 'pinia';
import { useVuelidate } from '@vuelidate/core';
import { required, minLength } from '@vuelidate/validators';
import { useAuthStore } from '@/store/AuthStore.js';

export default {
    name: "SignUpPages",
    data: () => ({
        v$: useVuelidate(),
        form: {
            name: '',
            email: '',
            password: ''
        },
        isHide: false
    }),
    methods: {
        ...mapActions(useAuthStore, ['register']),
        submitForm() {
            this.v$.$validate();
            if (!this.v$.$error) {
                this.register(this.form);
            }
        },
        toggleActivePassword() {
            this.isHide = !this.isHide;
        }
    },
    validations() {
        return {
            form: {
                name: { required },
                email: { required, },
                password: { minLength: minLength(8), required }
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.sign-up {
    background-color: var(--register-pages-bc);
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

        $xs-mobile: 768px;

        @media (max-width: $xs-mobile) {
            padding: 30px 20px;
        }
    }
    &__form {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
        margin-bottom: 55px;

        $xs-mobile: 768px;

        @media (max-width: $xs-mobile) {
            margin-bottom: 30px;
        }
    }
    &__input {
        border: 1px solid var(--ligth-white-color);
        border-radius: var(--border-radius-input);
        padding: 15px 50px;
        max-width: 450px;
        width: 100%;
        margin-bottom: 20px;

        $mq-mobile: 480px;

        @media (max-width: $mq-mobile) {
            padding: 15px 25px 15px 50px;
        }
        &::placeholder {
            color: var(--placeholder-color);
        }
        &:focus {
            outline: none;
        }
        &.isError {
            margin-bottom: 10px;
            border: 1px solid var(--border-red-color);
            & + .sign-up__icon {
                top: 17%;
                transform: translateY(17%);
            }
            & ~ .sign-up__hide {
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
        color: var(--red-color);
        margin-bottom: 15px;
    }
}
</style>