import { Injectable } from '@angular/core';




export interface Todo {
  id: number;
  text: string;
  date?: any;
  complete: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor() { }
//d,dd,dddd
  public todos: Todo[] = [
    {id: 1, text: 'Заполнить портфолио', date: new Date(), complete: true},
    {id: 2, text: 'Заполнить резюме', date: new Date(), complete: false},
    {id: 3, text: 'Заполнить отправить резюме', date: new Date(), complete: false},
    {id: 4, text: 'Заполнить Найти работу', date: new Date(), complete: false}
  ];
  // tslint:disable-next-line:typedef
  Complete(id: number) {
    // @ts-ignore
    // tslint:disable-next-line:triple-equals
    const checkItem = this.todos.findIndex(currentValue => currentValue.id == id);
    console.log( checkItem);
    this.todos[checkItem].complete = !this.todos[checkItem].complete;
  }

}
