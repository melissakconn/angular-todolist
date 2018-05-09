import { Injectable } from '@angular/core';

@Injectable()
export class TodoListService {
  
  private todoList = [
    { title: 'Clean Room' },
    { title: 'Drop off packages' },
    { title: 'Go to the gym' },
    { title: 'Take the dog for a walk' },
    { title: 'Do the dishes' },
    { title: 'Work on Coding' },
  ];
  
  constructor() { }
  
  getTodoList() {
    return this.todoList;

  }
}
