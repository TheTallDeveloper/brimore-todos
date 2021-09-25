<template>
  <div class="addTask">
    <a-typography-title :level="4">{{ $store.state.text }}</a-typography-title>
    <a-input class="text" v-model="text" placeholder="Enter Task" />
    <hr />
    <a-button class="button" @click="insertTodo" type="primary">Add Task</a-button>
  </div>
  <div>
    <h3>Tasks</h3>
    <div class="task-container">
      <div class="task"
      v-for="(todos, index) in todos"
      v-bind:item="todos"
      v-bind:index="index"
      v-bind:key="todos.title"
      @dblclick="deleteTodo()">
      <a-list-item>{{ todos.title }}</a-list-item>
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
      text: '',
      todos: [],
    };
  },
  methods: {
    insertTodo() {
      api.postTodo(this.text);
      console.log('inserted');
    },
    updateTodo(text, id) {
      api.updateTodo(text, id);
      console.log('updted');
    },
    deleteTodo(id) {
      console.log('deleted');
      api.deleteTodo(id);
    },
  },
  mounted() {
    console.log('started');
    api.getTodos()
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
  margin-bottom: 5px;
}
.button {
  font-size: 15px;
  color: white;
  background-color: rgb(81, 81, 250);
}
div.task {
  border: 1px solid #5bd658;
  background-color: #bcffb8;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
