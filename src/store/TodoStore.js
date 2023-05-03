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
            this.todoOrder = this.todoOrder.map((elem) => {
                if (elem.id === todoContent.id) return todoContent;

                return elem;
            })
        },
        deleteTodoOrder(index) {
            this.todoOrder.splice(index, 1);
        },
        checkedTodoOrder(index) {
            this.todoOrder[index].isActive = !this.todoOrder[index].isActive;
        },
        sortTodoOrder(orders) {
            this.todoOrder = [...orders]
        }
    }
})