import { QueryEntity } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
import { State, TodosStore } from './todos.store';
import { VISIBILITY_FILTER } from '../models/filter.model';
import { combineLatest } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class TodosQuery extends QueryEntity<State, Todo>{

    selectVisibilityFilter$ = this.select(state => state.ui.filter);

    selectVisibleTodos$ = combineLatest(
        this.selectVisibilityFilter$,
        this.selectAll(),
        this.getVisibleTodos
    );

    constructor(protected store: TodosStore){
        super(store)
    }

    private getVisibleTodos(filter, todos): Todo[] {
        switch (filter) {
          case VISIBILITY_FILTER.SHOW_COMPLETED:
            return todos.filter(t => t.completed);
          case VISIBILITY_FILTER.SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
          default:
            return todos;
        }
    }
}