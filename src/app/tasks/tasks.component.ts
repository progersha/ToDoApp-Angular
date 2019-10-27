import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from "../shared/tasks.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  @Input() tasks: Task[];
  @Output() onToggle = new EventEmitter<number>();
  @Output() onRemove = new EventEmitter<number>();
  @Output() onAmount = new EventEmitter<null>();

  constructor() { }

  ngOnInit() {
  }

  onChange(id: number) {
    this.onToggle.emit(id);
  }

  removeTask(id: number) {
    this.onRemove.emit(id);
  }

}
