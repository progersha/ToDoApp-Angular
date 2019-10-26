import {Injectable} from "@angular/core";

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
        {id: 2, text: 'Drink juice', completed: false}
    ];

    getTask() {
        return this.tasks;
    }

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

    setFilter(id: number) {
        return this.tasks.filter((task) => {
            if (id == 2) {
                console.log(task.completed);
                return task.completed;
            }
            if (id == 1) {
                console.log(!task.completed);
                return !task.completed;
            }
            return true;
        });
    }
}
