import { Component, OnInit } from '@angular/core';
import { TodosService } from '../state/todos.service';
import { Observable } from 'rxjs';
import { Todo } from '../state/todo.model';
import { TodosQuery } from '../state/todos.query';

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.scss']
})
export class TodosPageComponent implements OnInit {

  todos$: Observable<Todo[]>;
  todoList: Todo[];

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

}
