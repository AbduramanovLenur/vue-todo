import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todoStore', {
    state: () => ({
        todoOrder: []
    }),
    getters: {
        getLengthTodo: (state) => state.todoOrder.length,
    },
    actions: {
        addTodoOrder(todoContent) {
            this.todoOrder.push(todoContent);
        },
        editTodoOrder(todoContent) {
            this.todoOrder.findIndex(elem => {
                if (elem.id === todoContent.id) {
                    this.elem = todoContent;
                }
            })
        },
        deleteTodoOrder(idx) {
            this.todoOrder.splice(idx, 1);
        },
        checkedTodoOrder(idx) {
            this.todoOrder[idx].isActive = !this.todoOrder[idx].isActive;
        }
    }
})