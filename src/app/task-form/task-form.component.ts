import { Component, OnInit } from '@angular/core';
import {Task, TasksService} from "../shared/tasks.service";

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  text: string = '';
  constructor(private tasksService: TasksService) { }

  ngOnInit() {
  }

  addTask() {
      const task: Task = {
        text: this.text,
        id: Date.now(),
        completed: false
      }
      this.tasksService.addTodo(task);
  }
}
