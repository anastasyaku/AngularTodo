import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';


export interface Todo {
  id: number;
  title: string;
  date?: any;
  complete: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor(private http: HttpClient) {
  }

  public todos: Todo[] = [];

  // @ts-ignore
  fetchTodo(): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10').pipe(tap(todos => this.todos = todos));

  }

  // tslint:disable-next-line:typedef
  Complete(id: number) {
    // @ts-ignore
    // tslint:disable-next-line:triple-equals
    const checkItem = this.todos.findIndex(currentValue => currentValue.id == id);
    // console.log( checkItem);
    this.todos[checkItem].complete = !this.todos[checkItem].complete;
  }


  // tslint:disable-next-line:typedef
  Remove(id: number) {
    // tslint:disable-next-line:triple-equals
    this.todos = this.todos.filter(x => x.id !== id);

  }

}
