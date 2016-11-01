import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent }  from './components/app/app.component';
import { TodosComponent } from './components/todos/todos.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, TodosComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
