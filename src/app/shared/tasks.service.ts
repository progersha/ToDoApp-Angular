import {Injectable} from "@angular/core";
import {filterType} from "../filters/filters.component";

export interface Task {
    id: number
    text: string
    completed: boolean

}

@Injectable({providedIn: 'root'})
export class TasksService {

    private tasks: Task[] = [
        {id: 0, text: 'Drink coffe', completed: false},
        {id: 1, text: 'Drink tea', completed: true},
        {id: 2, text: 'Drink juice', completed: false},
    ];
    private currentFilter: filterType = 0;

    getTask() {
        if (this.currentFilter == 0) {
            return this.tasks;
        }
        //this.tasks = JSON.parse(localStorage.getItem('todos'));
        return this.tasks.filter((task) => {
            if (this.currentFilter == 2) {
                return task.completed;
            }
            return !task.completed;
        });
    }

    onToggle(id: number) {
        const idx = this.tasks.findIndex(t => t.id === id);
        this.tasks[idx].completed = !this.tasks[idx].completed;
        //localStorage.setItem('todos', JSON.stringify(this.tasks));
    }

    onRemove(id: number) {
        this.tasks = this.tasks.filter(t => t.id !== id)
        //localStorage.setItem('todos', JSON.stringify(this.tasks));
    }

    addTodo(task: Task) {
        this.tasks.push(task);
        //localStorage.setItem('todos', JSON.stringify(this.tasks));
    }

    setFilter(id: filterType) {
        this.currentFilter = id;
    }
}
