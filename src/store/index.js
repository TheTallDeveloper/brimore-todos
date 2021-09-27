import { createStore } from 'vuex';
import api from '../core/api';

export default createStore({
  state: {
    todos: [],
  },
  mutations: {
    insertTodo(state, todo) {
      console.log(todo);
      state.todos.push(todo);
      console.log('inserted');
    },
    updateTodo(state, { title, id }) {
      console.log(title, id);
      const { todos } = state;
      const idd = parseInt(id, 10);
      const objIndex = todos.findIndex((obj) => obj.id === idd);
      todos[objIndex].title = title;
      console.log('updated');
    },
    deleteTodo(state, id) {
      const { todos } = state;
      const idd = parseInt(id, 10);
      const current = todos.filter((todo) => todo.id !== idd);
      state.todos = current;
      console.log('deleted');
    },
    getTodo(state, todos) {
      state.todos = todos;
      console.log('data received');
    },
  },
  actions: {
    getData(context) {
      console.log('started');
      api.getTodos()
        .then((response) => {
          context.commit('getTodo', response);
        });
    },
    insertData(context, text) {
      api.postTodo(text)
        .then((result) => result.id)
        .then((response) => {
          context.commit('insertTodo', {
            id: response,
            title: text,
          });
        });
    },
    deleteTodo(context, id) {
      api.deleteTodo(id);
      context.commit('deleteTodo', id);
    },
    updateTodo(context, { text, id }) {
      const todo = {
        title: text,
        id,
      };
      api.updateTodo(text, id);
      context.commit('updateTodo', todo);
    },
  },
});
