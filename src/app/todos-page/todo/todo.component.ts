import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/state/todo.model';
import { FormControl } from '@angular/forms';
import { ID } from '@datorama/akita';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo;
  @Output() complete = new EventEmitter<Todo>();
  @Output() delete = new EventEmitter<ID>();
  control: FormControl;

  constructor() { }

  ngOnInit() {
    this.control = new FormControl(this.todo.completed);

    this.control.valueChanges.pipe().subscribe((completed: boolean) => {
      this.complete.emit({...this.todo, completed});
    })
  }

}
