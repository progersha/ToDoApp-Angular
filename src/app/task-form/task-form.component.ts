import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Task, TasksService} from "../shared/tasks.service";

@Component({
    selector: 'app-task-form',
    templateUrl: './task-form.component.html',
    styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

    @Output() onSubmit = new EventEmitter<Task>();
    text: string;

    constructor() {
    }

    ngOnInit() {
    }

    addTask() {
        if (this.text == "") {
            return;
        }
        const task: Task = {
            text: this.text,
            id: Date.now(),
            completed: false
        };
        this.onSubmit.emit(task);
        this.text = "";
    }
}
