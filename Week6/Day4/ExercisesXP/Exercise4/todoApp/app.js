import TodoList from "./todo.js";

const myTodoList = new TodoList()

// Add tasks
myTodoList.addTask('Buy groceries');
myTodoList.addTask('Walk the dog');
myTodoList.addTask('Finish homework');

// Mark a task as complete
myTodoList.markComplete('Walk the dog');

// List all tasks
console.log('All tasks:');
console.log(myTodoList.listAll());