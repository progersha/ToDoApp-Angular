import {Injectable} from "@angular/core";
import {TasksService} from "../shared/tasks.service";

export interface Filter{
    id: number
    label: string
}

@Injectable({providedIn: 'root'})
export class FiltersService {
    public filters: Filter[] = [
        {id: 0, label: 'All'},
        {id: 1, label: 'Active'},
        {id: 2, label: 'Closed'}
    ]

    constructor(private tasksServes: TasksService) { }

    onActive(id: number) {
        this.tasksServes.tasks.filter((task) => {
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


