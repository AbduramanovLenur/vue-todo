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
                    <div class="todo-item__file" v-if="value.file.length">
                        <a :href="value.file[0].dataURL" class="todo-item__download" :download="value.file[0].name">
                            <IconSvg name="download" />
                        </a>
                    </div>
                    <div :class="{'todo-item__edit': true, 'isActive': value.isActive, 'todo_margin': !value.file.length}" @click="$emit('editItem')">
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
            return this.classNameLabels.find(label => label === this.value.label) || '';
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
        background-color: var(--white-color-bc);
        border-radius: var(--bored-raduis-item-order);
        padding: 20px 30px;
        &.isActive {
            opacity: 0.5;
        }

        $mq-mobile: 480px;

        @media (max-width: $mq-mobile) {
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
        border-bottom: 1px solid var(--brown-color);
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
        color: var(--white-color);
        padding: 3px 10px;
        border-radius: 20px;
        width: 80px;
        &.сritical {
            background-color: var(--red-color);
        }
        &.major {
            background-color: var(--blue-color);
        }
        &.minor {
            background-color: var(--green-color);
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
        color: var(--grey-color);
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
        &.todo_margin {
            margin-left: auto;
        }
    }
    &__file,
    &__edit,
    &__delete {
        cursor: pointer;
    }
}
</style>