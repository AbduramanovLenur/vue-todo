<template>
    <div class="sort">
        <div class="sort__filter-text">Сортировать</div>
        <select class="sort__select" @change="sortArray($event)">
            <option 
              class="sort__option" 
              v-for="item in options" 
              :value="item.value" 
              :key="item.id"
              :disabled="!item.isActive"
              :selected="!item.isActive"
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
                { id: 1, text: 'Все', value: 'all', isActive: false },
                { id: 2, text: 'Приоритет', value: 'priority', isActive: true  },
                { id: 3, text: 'Дата', value: 'date', isActive: true  },
                { id: 4, text: 'Активные', value: 'status', isActive: true  }
            ],
            sortTexts: ['priority', 'date', 'status'],
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
  @media (max-width: var(--md-desktop)) {
    margin-bottom: 30px;
  }
  &__filter {
    &-text {
      font-size: 20px;
      font-weight: 500;
      line-height: 1.15;
      margin-bottom: 20px;
      color: var(--white-color);
      &.white_text {
        color: var(--white-color);
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
    background-color: var(--white-color-bc);
    color: var(--yelow-color);
    box-shadow: 0px 0px 20px rgba(103, 103, 103, 0.25);
    border-radius: var(--border-radius-select-sort);
    border: none;
  }
}
</style>