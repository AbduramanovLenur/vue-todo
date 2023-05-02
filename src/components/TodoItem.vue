<template>
    <li class="todo-item">
        <div class="todo-item__box">
            <div class="todo-item__checked">
                <CheckedTodo />
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
                    <div class="todo-item__edit">
                        <IconSvg name="edit" />
                    </div>
                    <div class="todo-item__delete">
                        <IconSvg name="delete" />
                    </div>
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
        classNameLabels: ['critical', 'major', 'minor']
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
    background-color: #fff;
}
</style>