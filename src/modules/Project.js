import { Todo } from "./Todo";

export class Project {
  constructor(name) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.todoList = [];
  }

  addTodo(todo) {
    if (!(todo instanceof Todo)) {
      throw new Error(
        `Invalid todo: expected an instance of Todo, received ${typeof todo}`
      );
    }
    this.todoList.push(todo);
  }
  removeTodo(todoId) {
    this.todoList = this.todoList.filter((todo) => todo.id !== todoId);
  }

  getTodoById(todoId) {
    return this.todoList.find((todo) => todo.id === todoId);
  }
}
