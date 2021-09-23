import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/';

class Todos {
  static axiosTodos() {
    const getTodos = axios.get(url);
    const data = getTodos.then((response) => response.data);
    return data;
  }
}

export default Todos;
