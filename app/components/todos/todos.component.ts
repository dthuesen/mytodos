import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
    selector: 'todos',
    template: `
      <div>
        <input type="text" 
               class="form-control" 
               [(ngModel)]="_todoService.newTodo" 
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
      
    `,
    providers: [ TodoService ]
})
export class TodosComponent {
  todos: any;
  errorMsg: string;
  successMsg: string;
  constructor(private _todoService: TodoService) {
    console.log('console.log from TodosComponent');
    this.todos = _todoService.getTodos();
  }

  addTodo() {
    if (!this._todoService.newTodo) {
      this.successMsg = null;
      console.log('You have entered nothing');
      this.errorMsg = 'You have entered nothing';
    } else if (this._todoService.newTodo.length < 3) {
      this.successMsg = null;
      console.log('You have to enter more than 3 characters');
      this.errorMsg = 'You have to enter more than 3 characters';
    } else {
      this.errorMsg = null;
      this._todoService.addTodo(this._todoService.newTodo.trim());
      this.successMsg = 'Your new todo was added.';
      setTimeout(function() {
        this.successMsg = null;
      }, 2000);
    }
  }

  removeTodo(todo: string) {
    this._todoService.removeTodo(todo);
    this.successMsg = null;
    this.errorMsg = null;
  }

  resetTodos() {
    this._todoService.resetTodos();
    this.successMsg = 'Todos cleared.';
  }
}
