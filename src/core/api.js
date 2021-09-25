import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/';
const urlUpdate = 'https://jsonplaceholder.typicode.com/todos/1';

class Todos {
  static getTodos() {
    const getTodos = axios.get(url);
    const data = getTodos.then((response) => response.data);
    return data;
  }

  static postTodo(text) {
    return axios.post(url, {
      title: text,
      body: 'body',
      userId: 1,
    });
  }

  static updateTodo(text, id) {
    return axios.put(urlUpdate, {
      title: text,
      body: 'body',
      id,
    });
  }

  static deleteTodo(id) {
    return axios.delete(`${url}${id}`);
  }
}

export default Todos;
