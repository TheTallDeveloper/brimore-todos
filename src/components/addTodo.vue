<template>
    <div class="addTask">
    <a-typography-title :level="4">Add Tasks</a-typography-title>
    <input class="text" type="text" v-model="todo" placeholder="Enter Task" />
    <hr />
    <a-button
      class="button"
      @click="addText"
      type="primary">Add Task</a-button>
  </div>
</template>

<script>
export default {
  name: 'addTodo',
  data() {
    return {
      todo: '',
    };
  },
  methods: {
    addText() {
      const { todo } = this;
      this.$store.dispatch('insertData', todo);
    },
  },
};
</script>
<style>
.button {
  font-size: 15px;
  color: white;
  background-color: rgb(81, 81, 250);
}
</style>
