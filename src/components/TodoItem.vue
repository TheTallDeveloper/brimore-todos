<template>
  <a-list-item
    v-bind:id="todoId"
    @dblclick="handleUpdate"
  >
    <div class="main">
      <p>{{ title }}</p>
      <button class="button" v-bind:id="todoId"
      v-on:click="deleteTodo">Delete</button>
    </div>
    <div class="update" v-show="isShow">
      <input class="text" type="text" v-model="text" v-bind:placeholder="title"/>
      <button class="button" v-bind:id="todoId"
      v-on:click="updateTodo">Update</button>
    </div>
  </a-list-item>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['todoId', 'title'],
  data() {
    return {
      isShow: false,
      text: '',
      id: '',
    };
  },
  methods: {
    deleteTodo({ target }) {
      const { id } = target;
      this.$store.dispatch('deleteTodo', id);
    },
    handleUpdate({ currentTarget }) {
      const { id } = currentTarget;
      this.id = id;
      this.isShow = !this.isShow;
    },
    updateTodo() {
      const { text, id } = this;
      const todo = {
        text,
        id,
      };
      this.$store.dispatch('updateTodo', todo);
      this.id = '';
      this.text = '';
      this.isShow = !this.isShow;
    },
  },
};
</script>
