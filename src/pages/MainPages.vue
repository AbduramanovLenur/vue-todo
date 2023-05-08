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
                        <LabelsTodo 
                            @labelsArray="labelsArray"
                        />
                        <FileDownload 
                            @downloadFile="downloadFile"
                        />
                        <button class="todo__button" v-if="!todo.isEdit">
                            Add
                        </button>
                        <button class="todo__button" v-else>
                            Cnange
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
import LabelsTodo from '@/components/LabelsTodo.vue';
import FileDownload from "@/components/FileDownload.vue";

export default {
    name: 'MainPages',
    components: { TodoItem, SortTodo, LabelsTodo, FileDownload },
    data: () => ({
        todo: {
            id: "id" + Math.random().toString(16).slice(2),
            title: '',
            subtitle: '',
            label: '',
            date: (new Date()).toLocaleDateString("ru-RU"),
            second: parseInt(+new Date()/1000),
            isEdit: false,
            isActive: false,
            file: []
        },
    }),
    methods: {
        ...mapActions(useTodoStore, ['addTodoOrder', 'editTodoOrder', 'deleteTodoOrder', 'checkedTodoOrder']),
        addOrderTodo() {
            if (this.todo.title && this.todo.subtitle && this.todo.label && this.todo.file.length) {
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
                    isActive: false,
                    file: []
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
                label: '',
                file: []
            }
        },
        labelsArray(label) {
            this.todo.label = label;
        },
        downloadFile(event) {
            const file = event.target.files[0];

            const blob = new Blob([file], { type: "application/octet-stream" })
            const url  = window.URL.createObjectURL(blob, { type: 'application/octet-stream' });

            this.todo.file.splice(0, 1, {
                id: 0,
                name: file.name,
                type: file.type,
                size: file.size,
                dataURL: url
            })
            // Если будет создана реальная база данных, то реализовать скачивание и загрузку файлов можно точно также, но дополнительно нужно будет написать POST и GET запрос, так как для этого проекта не была реализована реальная база данных, то загрузку и скачивание файлов с сервера реализовать не получится. Онлайн сервера БД не поддерживают хранение различных типов расширения, только форматы изображений, а нам нужно скачивать и загружать файлы любого расширения.
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
        color: var(--white-color);
    }
    &__form {
        display: flex;
        flex-direction: column;
        max-width: 800px;
        width: 100%;
        margin-bottom: 30px;
        background-color: var(--ligth-green-bc);
        padding: 30px;
        border-radius: 20px;
    }
    &__info {
        display: grid;
        align-items: center;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        @media (max-width: var(--xs-mobile)) {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
        }
        @media (max-width: var(--mq-mobile)) {
            grid-template-columns: repeat(1, 1fr);
        }
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
        background-color: var(--white-color-bc);
        color: var(--black-color);
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
        color: var(--black-color);
        background-color: var(--white-color-bc);
        padding: 20px 50px;
        border-radius: var(--border-radius-alert);
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
                background-color: var(--hover-btn-black);
                color: var(--hover-btn-white);
            }
        }
    }
}
</style>