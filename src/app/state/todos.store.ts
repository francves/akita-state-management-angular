import { Todo } from './todo.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

export interface State extends EntityState<Todo> {}

@Injectable({
    providedIn: 'root'
})
@StoreConfig({ name: 'todos' })
export class TodosStore extends EntityStore<State, Todo>{
    constructor(){
        super();
    }
}