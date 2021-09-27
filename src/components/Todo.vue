<template>
<addTodo />
  <div>
    <h3>Tasks</h3>
    <div class="task-container">
      <div class="task"
      v-for="(todo, index) in this.$store.state.todos"
      v-bind:key="todo.id">
      <TodoItem
        class="list-item"
        v-bind:index="index"
        :todoId="todo.id" :title="todo.title" />
      </div>
    </div>
  </div>
</template>

<script>
import addTodo from './addTodo.vue';
import TodoItem from './TodoItem.vue';

export default {
  name: 'Todo',
  components: {
    addTodo,
    TodoItem,
  },
  mounted() {
    this.$store.dispatch('getData');
  },
};
</script>

<style>
.addTask {
  margin-bottom: 60px;
  border-style: double;
  border-width: 2px;
  border-radius: 7px;
}
.text {
  width: 50%;
  margin-bottom: 5px;
}
.button {
  font-size: 10px;
  color: white;
  background-color: rgb(81, 81, 250);
}
div.task {
  border: 1px solid #5bd658;
  background-color: #bcffb8;
  padding: 10px;
  margin-bottom: 10px;
}
.list-item {
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
