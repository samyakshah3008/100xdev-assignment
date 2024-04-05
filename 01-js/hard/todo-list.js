/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todoList = [];
  }

  add(todo) {
    return this.todoList.push(todo);
  }

  remove(indexOfTodo) {
    let updatedTodo = this.todoList.filter(
      (item, index) => index != indexOfTodo
    );
    this.todoList = updatedTodo;
  }

  update(index, updatedTodo) {
    let updatedTodoList = this.todoList.map((item, itemIndex) =>
      itemIndex === index ? updatedTodo : item
    );
    this.todoList = updatedTodoList;
  }

  getAll() {
    return this.todoList;
  }

  get(indexOfTodo) {
    return this.todoList[indexOfTodo] || null;
  }

  clear() {
    this.todoList = [];
  }
}

module.exports = Todo;
