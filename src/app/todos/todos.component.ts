import {Component, OnInit} from '@angular/core';
import {TodoServiceService} from '../shared/todo-service.service';



@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  constructor(public todoS: TodoServiceService) {

  }

////kzkzkz
  ngOnInit(): void {  }
  // tslint:disable-next-line:typedef
  completeTask(id: number){
    // this.onChange.emit(id);
  }

}
