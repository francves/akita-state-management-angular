import { Injectable } from "@angular/core";
import { createTodo, Todo } from './todo.model';
import { TodosStore } from './todos.store';
import { ID } from '@datorama/akita';

@Injectable({
    providedIn: 'root'
})
export class TodosService {
    constructor(private todosStore: TodosStore) {}

    add(title: string){
        const todo = createTodo({ id: Math.random(), title });
        this.todosStore.add(todo);
    }

    delete(id: ID){
        this.todosStore.remove(id);
    }

    complete({ id, completed }: Todo){
        this.todosStore.update(id, { completed });
    }
}