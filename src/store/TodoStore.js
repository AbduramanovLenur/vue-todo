import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todoStore', {
    state: () => ({
        todoOrder: [],
        index: 0
    }),
    getters: {
        getLengthTodo: (state) => state.todoOrder.length
    },
    actions: {
        addTodoOrder({title, subtitle, label}) {
            this.todoOrder.push({
                id: ++this.index,
                title: title,
                subtitle: subtitle,
                label: label
            })
        }
    }
})