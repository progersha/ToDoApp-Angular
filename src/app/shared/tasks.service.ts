import {Injectable} from "@angular/core";

export interface Task {
    id: number
    text: string
    completed: boolean
}

@Injectable({providedIn: 'root'})
export class TasksService {
    public tasks: Task[] = [
        {id: 0, text: 'Drink coffe', completed: false},
        {id: 1, text: 'Drink tea', completed: true},
        {id: 2, text: 'Drink juice', completed: false}
    ]

    onToggle(id: number) {
        const idx = this.tasks.findIndex(t => t.id === id);
        this.tasks[idx].completed = !this.tasks[idx].completed;
    }

    onRemove(id: number) {
        this.tasks = this.tasks.filter(t => t.id !== id)
    }

    addTodo(task: Task) {
        this.tasks.push(task);
    }

}
