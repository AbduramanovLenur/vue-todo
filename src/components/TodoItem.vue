<template>
    <li class="todo-item">
        <div :class="{'todo-item__box': true, 'isActive': value.isActive}">
            <div class="todo-item__checked">
                <CheckedTodo @checkedOrder="$emit('checkedOrderItem')"/>
            </div>
            <div class="todo-item__content">
                <div class="todo-item__top">
                    <h2 class="todo-item__title">
                        {{ value.title }}
                    </h2>
                    <div :class="['todo-item__status', getLabel]">
                        {{ getLabel }}
                    </div>
                </div>
                <div class="todo-item__bottom">
                    <div class="todo-item__subtitle">
                        {{ value.subtitle }}
                    </div>
                    <div class="todo-item__file"></div>
                    <div :class="{'todo-item__edit': true, 'isActive': value.isActive}" @click="$emit('editItem')">
                        <IconSvg name="edit" />
                    </div>
                    <div class="todo-item__delete" @click="$emit('deleteItem')">
                        <IconSvg name="delete" />
                    </div>
                </div>
                <div class="todo-item__date">
                    {{ value.date }} г.
                </div>
            </div>
        </div>
    </li>
</template>

<script>
import CheckedTodo from '@/components/CheckedTodo.vue'

export default {
    name: "TodoItem",
    components: { CheckedTodo },
    props: {
        value: {
            type: Object,
            default: () => { }
        }
    },
    data: () => ({
        classNameLabels: ['сritical', 'major', 'minor']
    }),
    computed: {
        getLabel() {
            return this.classNameLabels.find(elem => (elem === this.value.label) ? elem : '');
        }
    }
}
</script>

<style lang="scss" scoped>
.todo-item {
    max-width: 800px;
    width: 100%;
    &__box {
        display: flex;
        gap: 30px;
        background-color: #fff;
        border-radius: 20px;
        padding: 20px 30px;
        &.isActive {
            opacity: 0.5;
        }
        @media (max-width: 480px) {
            gap: 10px;
            padding: 10px;
        }
    }
    &__content {
        width: 100%;
    }
    &__top {
        display: flex;
        align-items: center;
        gap: 10px;
        border-bottom: 1px solid #3E3B3B;
        padding-bottom: 10px;
        margin-bottom: 10px;
    }
    &__title {
        font-size: 18px;
        line-height: 1.6;
        max-width: 400px;
    }
    &__status {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        font-weight: 700;
        color: #fff;
        padding: 3px 10px;
        border-radius: 20px;
        width: 80px;
        &.сritical {
            background-color: #ff0000;
        }
        &.major {
            background-color: #0000ff;
        }
        &.minor {
            background-color: #008000;
        }
    }
    &__bottom {
        display: flex; 
        justify-content: space-between;
        gap: 10px;
    }
    &__date {
        font-size: 14px;
        max-width: 100px;
        color: #808080;
    }
    &__subtitle {
        font-size: 14px;
        font-weight: 400;
        line-height: 1.6;
        max-width: 500px;
    }
    &__file {
        margin-left: auto;
    }
    &__edit {
        &.isActive {
            pointer-events: none;
        }
    }
    &__file,
    &__edit,
    &__delete {
        cursor: pointer;
    }
}
</style>