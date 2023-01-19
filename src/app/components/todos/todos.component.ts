import {Component, ViewChild, ElementRef} from '@angular/core';
import {Task} from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  inpText: string = '';
  taskList: Task[] = JSON.parse(localStorage.getItem('taskList')) || [];
  @ViewChild('taskInput') taskInput: ElementRef | undefined;

  setData(array: Task[]) {
    localStorage.setItem('taskList', JSON.stringify(array));
  }

  addTask(): void {
    if (this.inpText !== '') {
      this.taskList.push({
        value: this.inpText,
        completed: false,
      });
    }
    this.inpText = '';
    this.taskInput.nativeElement.focus();
    this.setData(this.taskList);
  }
  completeTask(id: number) {
    this.taskList.map((v, i) => {
      if (i == id) {
        v.completed = !v.completed;
      }
      this.setData(this.taskList);
    });
  }
  deleteTask(id: number): void {
    this.taskList = this.taskList.filter((v, i) => i !== id);
    this.setData(this.taskList);
  }

}
