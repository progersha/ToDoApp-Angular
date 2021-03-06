import { Component } from '@angular/core';
import {filterType} from "./filters/filters.component";
import {TasksService, Task} from "./shared/tasks.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  todayDate = new Date();
  filteredTasks: Task[];

  constructor(private taskService: TasksService) {
    this.filteredTasks = this.taskService.getTask();
  }

  setFilter(filterId: filterType) {
    this.taskService.setFilter(filterId);
    this.filteredTasks = this.taskService.getTask();
  }

  toggleTask(id: number) {
    this.taskService.onToggle(id);
    this.filteredTasks = this.taskService.getTask();

  }

  removeTask(id: number) {
    this.taskService.onRemove(id);
    this.filteredTasks = this.taskService.getTask();
  }

  addTask(task: Task) {
    this.taskService.addTodo(task);
    this.filteredTasks = this.taskService.getTask();
  }

}
