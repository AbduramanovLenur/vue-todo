<template>
    <div class="form-info">
        <div class="form-info__line"></div>
        <div class="form-info__clue">
            <slot name="line-text"></slot>
        </div>
        <div class="form-info__question">
            <slot name="question"></slot> <router-link class="form-info__sign-up" :to="to"><slot name="btn"></slot></router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "FormInfo",
    props: {
        to: {
            type: String,
            default: () => ''
        }
    }
}
</script>

<style lang="scss" scoped>
.form-info {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    &__line {
        border: 0.5px solid #E2E8F0;
        width: 100%;
    }
    &__clue {
        font-size: 14px;
        line-height: 1.3;
        margin-top: -15px;
        margin-bottom: 35px;
        background-color: var(--white-color-bc);
        color: var(--turquoise-color);
        padding: 5px;
        @media (max-width: var(--xs-mobile)) {
            margin-bottom: 20px;
        }
    }
    &__sign-up {
        color: var(--aqua-color);
        font-weight: 700;
    }
}
</style>