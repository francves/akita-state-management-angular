import { Component, OnInit } from '@angular/core';
import { TodosService } from '../state/todos.service';
import { Observable } from 'rxjs';
import { Todo } from '../state/todo.model';
import { TodosQuery } from '../state/todos.query';
import { ID } from '@datorama/akita';

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.scss']
})
export class TodosPageComponent implements OnInit {

  todos$: Observable<Todo[]>;

  constructor(
    private todosService: TodosService,
    private todosQuery: TodosQuery
  ) { }

  ngOnInit() {
    this.todos$ = this.todosQuery.selectAll()
  }

  add(input: HTMLInputElement) {
    this.todosService.add(input.value);
    input.value = '';
  }

  delete(id: ID){
    console.log("Delete: ", id)
    this.todosService.delete(id);
  }

  complete(todo: Todo){
    console.log("Completado: ", todo)
    this.todosService.complete(todo);
  }
}
