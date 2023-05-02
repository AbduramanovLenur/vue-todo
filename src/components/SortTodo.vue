<template>
    <div class="sort">
        <div class="sort__filter-text">Сортировать</div>
        <select class="sort__select" @change="sortArray($event)">
            <option 
              class="sort__option" 
              v-for="item in options" 
              :value="item.value" 
              :key="item.id"
            > {{ item.text }} </option>
        </select>
    </div>
</template>

<script>
import sort from '@/utils/sort.js';
import { mapActions } from 'pinia';
import {useTodoStore} from '@/store/TodoStore.js';

export default {
    name: 'SortTodo',
    props: {
      arrayElements: {
          type: Array,
          default: () => []
      }
    },
    data: () => {
        return {
            options: [
                { id: 1, text: 'Всё', value: 'all' },
                { id: 2, text: 'Приоритет', value: 'priority' },
                { id: 3, text: 'Дата', value: 'date' },
                { id: 4, text: 'Активные', value: 'status' }
            ],
            sortTexts: ['all', 'priority', 'date', 'status'],
            sortTextsLabel: ["сritical", "major", "minor"],
            sortTextsStatus: [false, true]
        }
    },
    methods: {
      ...mapActions(useTodoStore, ['sortTodoOrder']),
      sortArray(event) {
          this.sortTodoOrder(sort(event, this.arrayElements, this.sortTexts, this.sortTextsLabel, this.sortTextsStatus))
      }
    }
}
</script>

<style lang="scss" scoped>
.sort {
  margin-bottom: 20px;
  @media (max-width: 1024px) {
    margin-bottom: 30px;
  }
  &__filter {
    &-text {
      font-size: 20px;
      font-weight: 500;
      line-height: 1.15;
      margin-bottom: 20px;
      color: #fff;
      &.white_text {
        color: #fff;
      }
    }
  }
  &__select {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.16;
    padding: 20px;
    width: 260px;
    height: 60px;
    background-color: #fff;
    color: #F9B300;
    box-shadow: 0px 0px 20px rgba(103, 103, 103, 0.25);
    border-radius: 5px;
    border: none;
    &:focus {
      outline: none;
    }
  }
}
</style>