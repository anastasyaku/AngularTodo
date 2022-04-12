import {Component, OnInit} from '@angular/core';
import {TodoServiceService} from '../shared/todo-service.service';
import {delay} from 'rxjs/operators';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  public flagLoad = true;

  constructor(public todoS: TodoServiceService) {

  }


  ngOnInit(): void {
    this.todoS.fetchTodo().pipe(delay(1000)).subscribe(() => {
      this.flagLoad = false;

    });

  }

  // tslint:disable-next-line:typedef
  completeTask(id: number) {
    // this.onChange.emit(id);
    this.todoS.Complete(id);
  }

  // tslint:disable-next-line:typedef
  removeTask(id: number) {
    this.todoS.Remove(id);
  }

}
