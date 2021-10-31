import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import {Todo} from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos : Todo[];
  inputTodo:string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos = [
    {
      content:"Eat food",
      completed:true,
    },
    {
      content:"Sleep",
      completed: false,
    },
    {
      content:"Read",
      completed:false,
    },
    ]
  }
  toggleDone(id:number){
    this.todos.map((value,index)=>{
      if(index==id) value.completed = !value.completed;
      return value;
    })
  }

  deleteTodo(id:number){
    this.todos = this.todos.filter((v,i)=> i !== id)
  }

  addTodo(){
    this.todos.push({
      content: this.inputTodo,
      completed: false,
    });
    this.inputTodo=''
  }

  
}
