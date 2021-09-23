<template>
  <div class="addTask">
    <a-typography-title :level="4">{{ $store.state.text }}</a-typography-title>
    <a-input class="text" placeholder="Enter Task" />
    <hr />
    <a-button class="button" type="primary">Add Task</a-button>
  </div>
  <div>
    <h3>Tasks</h3>
    <div class="task-container">
      <div class="task"
      v-for="(todos, index) in todos"
      v-bind:item="todos"
      v-bind:index="index"
      v-bind:key="todos.title">
      <a-list-item>{{ todos.title }}</a-list-item>
      <hr />
      </div>
    </div>
  </div>
</template>

<script>
import api from '../core/api';

export default {
  name: 'Todo',
  data() {
    return {
      todos: [],
    };
  },
  mounted() {
    console.log('started');
    api.axiosTodos()
      .then((response) => { this.todos = response; });
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
  margin-bottom: 10px;
}
.button {
  font-size: 15px;
  color: white;
  background-color: rgb(81, 81, 250);
}
</style>
