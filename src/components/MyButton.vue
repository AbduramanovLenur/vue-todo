<template>
    <button class="my-button">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "MyButton"
}
</script>

<style lang="scss" scoped>
.my-button {
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
@media (hover: hover) {
    .my-button {
        &:hover {
            background-color: var(--hover-btn-auth);
        }
    }
}
</style>