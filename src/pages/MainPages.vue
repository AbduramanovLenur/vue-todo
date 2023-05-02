<template>
    <section class="todo">
        <div class="container">
            <div class="todo__inner">
                <h2 class="todo__title">
                    My Tasks
                </h2>
                <form class="todo__form" @submit.prevent="addOrderTodo">
                    <MyInput v-model="todo.title" placeholderValue="Title" />
                    <MyInput v-model="todo.subtitle" placeholderValue="Subtitle" />
                    <div class="todo__info">
                        <label class="todo__labels">Label:
                            <select class="todo__select" v-model="todo.label">
                                <option value="" disabled>Choose</option>
                                <option value="сritical" class="todo__option">Critical</option>
                                <option value="major" class="todo__option">Major</option>
                                <option value="minor" class="todo__option">Minor</option>
                            </select>
                        </label>
                        <div class="todo__add-file">
                            <input name="file" type="file" id="todo__file" class="todo__file" multiple>
                            <label for="todo__file" class="todo__file-button">
                                <span class="todo__file-icon-wrapper"><img class="todo__file-icon"
                                        src="@/assets/images/add.png" alt="Выбрать файл" width="25"></span>
                                <span class="todo__file-button-text">Выберите файл</span>
                            </label>
                        </div>
                        <button class="todo__button">
                            Add
                        </button>
                    </div>
                </form>
                <SortTodo v-if="getLengthTodo" :arrayElements="todoOrder" />
                <transition-group class="todo__list" v-if="getLengthTodo" name="todo" tag="ul">
                    <TodoItem 
                        v-for="(item, index) in todoOrder" 
                        :key="item.id" 
                        :value="item" 
                        @editItem="editItem(index)"
                        @deleteItem="deleteItem(index)"
                        @checkedOrderItem="checkedOrderItem(index)"
                    />
                </transition-group>
                <div class="todo__empty" v-else>
                    Список пуст. Пора добавить первую запись!
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { toast } from 'vue3-toastify';
import { mapState, mapActions } from 'pinia';
import {useTodoStore} from '@/store/TodoStore.js';
import TodoItem from '@/components/TodoItem.vue';
import SortTodo from '@/components/SortTodo.vue';

export default {
    name: 'MainPages',
    components: { TodoItem, SortTodo },
    data: () => ({
        todo: {
            id: "id" + Math.random().toString(16).slice(2),
            title: '',
            subtitle: '',
            label: '',
            date: (new Date()).toLocaleDateString("ru-RU"),
            second: parseInt(+new Date()/1000),
            isEdit: false,
            isActive: false
        },
    }),
    methods: {
        ...mapActions(useTodoStore, ['addTodoOrder', 'editTodoOrder', 'deleteTodoOrder', 'checkedTodoOrder']),
        addOrderTodo() {
            if (this.todo.title && this.todo.subtitle && this.todo.label) {
                if (this.todo.isEdit) {
                    toast.success('Запись обновлена');
                    this.todo.isEdit = false;
                    this.editTodoOrder(this.todo);
                } else {
                    toast.success('Запись добавлена');
                    this.addTodoOrder(this.todo);
                }
                this.todo = {
                    id: "id" + Math.random().toString(16).slice(2),
                    title: '',
                    subtitle: '',
                    label: '',
                    date: (new Date()).toLocaleDateString("ru-RU"),
                    second: parseInt(+new Date()/1000),
                    isEdit: false,
                    isActive: false
                }
            } else {
                toast.error('Заполните форму');
            }
        },
        editItem(index) {
            this.todo = this.todoOrder[index];
            this.todo.isEdit = true;
        },
        deleteItem(index) {
            this.deleteTodoOrder(index);
            toast.success('Запись удалена');
        },
        checkedOrderItem(index) {
            this.checkedTodoOrder(index);
            this.todo = {
                title: '',
                subtitle: '',
                label: ''
            }
        }
    },
    computed: {
        ...mapState(useTodoStore, ['todoOrder', 'getLengthTodo'])
    }
}
</script>

<style lang="scss" scoped>
.todo {
    background-color: var(--main-pages-bc);
    &__inner {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
        padding: 35px 0;
    }
    &__title {
        font-size: 48px;
        font-weight: 700;
        line-height: 1.6;
        letter-spacing: 0.25px;
        margin-bottom: 45px;
        max-width: 350px;
        color: #fff;
    }
    &__form {
        display: flex;
        flex-direction: column;
        max-width: 800px;
        width: 100%;
        margin-bottom: 30px;
    }
    &__info {
        display: grid;
        align-items: center;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        @media (max-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
        }
        @media (max-width: 480px) {
            grid-template-columns: repeat(1, 1fr);
        }
    }
    &__labels {
        font-size: 18px;
        margin-bottom: 5px;
        color: #fff;
        max-width: 200px;
    }
    &__select {
        font-size: 18px;
        text-transform: uppercase;
        width: 200px;
        padding: 10px 5px;
        border-radius: 20px;
        background-color: #fff;
        color: #000;

        &:focus {
            outline: none;
        }
    }
    &__option {
        color: #000;
    }
    &__add-file {
        max-width: 290px;
        width: 100%;
        position: relative;
        text-align: center;
    }
    &__file {
        opacity: 0;
        visibility: hidden;
        position: absolute;
    }
    &__file-icon-wrapper {
        height: 60px;
        width: 60px;
        margin-right: 15px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        border-right: 1px solid #fff;
    }
    &__file-button-text {
        line-height: 1;
        margin-top: 1px;
    }
    &__file-button {
        width: 100%;
        max-width: 290px;
        height: 60px;
        background: #1bbc9b;
        color: #fff;
        font-size: 1.125rem;
        font-weight: 700;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start;
        border-radius: 3px;
        cursor: pointer;
        margin: 0 auto;
    }
    &__button {
        font-size: 18px;
        line-height: 1.6;
        text-transform: uppercase;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 180px;
        height: 50px;
        border-radius: 25px;
        background-color: #fff;
        color: #000;
        transition: 0.5s;
    }
    &__list {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        width: 100%;
    }
    &__empty {
        display: flex;
        justify-content: center;
        font-size: 25px;
        color: #000;
        background-color: #fff;
        padding: 20px 50px;
        border-radius: 20px;
        text-align: center;
        @media (max-width: 768px) {
            font-size: 18px;
            padding: 20px 30px;
        }
    }
}

@media (hover: hover) {
    .todo {
        &__button {
            &:hover {
                background-color: #000;
                color: #fff;
            }
        }
    }
}
</style>