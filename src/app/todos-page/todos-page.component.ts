import { Component, OnInit } from '@angular/core';
import { TodosService } from '../state/todos.service';
import { Observable } from 'rxjs';
import { Todo } from '../state/todo.model';
import { TodosQuery } from '../state/todos.query';
import { ID } from '@datorama/akita';
import { VISIBILITY_FILTER, initialFilters } from '../models/filter.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.scss']
})
export class TodosPageComponent implements OnInit {

  todos$: Observable<Todo[]>;
  activeFilter$: Observable<VISIBILITY_FILTER>;
  filters = initialFilters;

  control: FormControl;

  constructor(
    private todosService: TodosService,
    private todosQuery: TodosQuery
  ) { }

  ngOnInit() {
    this.todos$ = this.todosQuery.selectVisibleTodos$;

    this.activeFilter$ = this.todosQuery.selectVisibilityFilter$;
    this.control = new FormControl(this.activeFilter$);
    this.control.valueChanges.pipe().subscribe(c => {
      console.log("Change: ", c)
      this.changeFilter(c)
    });
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

  changeFilter(filter: VISIBILITY_FILTER) {
    this.todosService.updateFilter(filter);
  }
}
