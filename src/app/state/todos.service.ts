import { Injectable } from "@angular/core";
import { createTodo } from './todo.model';
import { TodosStore } from './todos.store';

@Injectable({
    providedIn: 'root'
})
export class TodosService {
    constructor(private todosStore: TodosStore) {}

    add(title: string){
        const todo = createTodo({ id: Math.random(), title });
        this.todosStore.add(todo)
    }
}