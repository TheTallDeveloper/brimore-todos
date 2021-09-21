<template>
<div>
<a-typography-title :level='1'>Welcome to my Todo App!</a-typography-title>
</div>
<div>
  <addTask text="Add Task"/>
</div>
<div>
  <Tasks />
</div>
</template>

<script>
import addTask from './components/addTask.vue';
import Tasks from './components/Tasks.vue';

export default {
  name: 'App',
  components: {
    addTask,
    Tasks,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 500px;
  margin: auto;
}
h1 {
  color: rgb(48, 98, 238);
}
</style>
