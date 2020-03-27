import { Todo } from './todo.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { VISIBILITY_FILTER } from '../models/filter.model';

export interface State extends EntityState<Todo> {
    ui: {
        filter: VISIBILITY_FILTER
    };
}

const initialState = {
    ui: { filter: VISIBILITY_FILTER.SHOW_ALL }
};

@Injectable({
    providedIn: 'root'
})
@StoreConfig({ name: 'todos' })
export class TodosStore extends EntityStore<State>{
    constructor(){
        super(initialState);
    }
}