import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent }  from './app.component';
import { TodosComponent } from './todos.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, TodosComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
