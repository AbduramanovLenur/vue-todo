<template>
    <h2 class="title">
        <slot></slot>
    </h2>
</template>

<script>
export default {
    name: "TitleForm"
}
</script>

<style lang="scss" scoped>
.title {
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
</style>