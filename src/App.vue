<template>
<div>
<a-typography-title :level='1'>Welcome to my Todo App!</a-typography-title>
</div>
<div>
  <Todo />
</div>
<div>
</div>
</template>

<script>
import Todo from './components/Todo.vue';

export default {
  name: 'App',
  components: {
    Todo,
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

</style>
