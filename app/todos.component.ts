import { Component } from '@angular/core';

@Component({
    selector: 'todos',
    template: `
      <div>
        <input type="text" 
               class="form-control" 
               [(ngModel)]="newTodo" 
               (keyup.enter)="addTodo()"
               placeholder="Write a todo and press enter" />
        <div *ngIf="errorMsg" 
             class="alert alert-danger" 
             role="alert">{{errorMsg}}</div>
        <div *ngIf="successMsg" 
             class="alert alert-success alert-dismissible" 
             role="alert">
             <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
             {{successMsg}}
        </div>
        <br />
      </div>
      <div>
        <ul class="list-group">
          <li class="list-group-item" 
              *ngFor="let todo of todos" >
            <a href="#" (dblclick)="removeTodo(todo)" >{{todo}}</a>
          </li>
        </ul>
        
        <div *ngIf="!todos">No todos found</div>
      </div>
      <button (click)="resetTodos()"
              class="btn btn-warning" >Reset todos</button>
      
    `
})
export class TodosComponent {
  todos: any[];
  newTodo: string;
  errorMsg: string;
  successMsg: string;
  constructor() {
    console.log('console.log from TodosComponent');
    this.todos = ['Wash Dishes', 'Pickup Indre', 'Eat dinner'];
  }

  addTodo() {
    if (!this.newTodo) {
      // this.errorMsg = null;
      this.successMsg = null;
      console.log('You have entered nothing');
      this.errorMsg = 'You have entered nothing';
    } else if (this.newTodo.length < 3) {
      // this.errorMsg = null;
      this.successMsg = null;
      console.log('You have to enter more than 3 characters');
      this.errorMsg = 'You have to enter more than 3 characters';
    } else {
      this.errorMsg = null;
      console.log('Adding a todo');
      this.todos.push(this.newTodo);
      console.log(this.todos);
      this.newTodo = '';
      this.successMsg = 'Your new todo was added.';
      setTimeout(function() {
        this.successMsg = null;
      }, 2000);
    }
  }

  removeTodo(todo: string) {
    console.log('Removing todo' + todo);
    this.todos.splice(this.todos.indexOf(todo), 1);
    this.successMsg = null;
    this.errorMsg = null;
  }

  resetTodos() {
    this.todos = [];
    this.successMsg = 'Todos cleared.';
  }
}
