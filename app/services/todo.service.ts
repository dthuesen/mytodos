export class TodoService {
  todos: any = ['Wash Dishes', 'Pickup Indre', 'Eat dinner', 'Getting the plane a 7am'];
  newTodo: string;

  getTodos() {
    return this.todos;
  }

  addTodo(newTodo: string) {
    this.todos.push(newTodo);
    console.log('Adding a todo');
    console.log(newTodo);
    this.newTodo = '';
  }

  removeTodo(todo: string) {
    this.todos.splice(this.todos.indexOf(todo), 1);
    console.log('Removing ' + '-> "' + todo + '" <-' + ' in todo.service.js.service.ts');
  }

  resetTodos(): any {
    this.todos.length = 0;
  };
}

