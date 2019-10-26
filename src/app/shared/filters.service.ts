import {Injectable} from "@angular/core";
import {TasksService} from "../shared/tasks.service";
import {filterType} from "../filters/filters.component";

export interface Filter{
    id: filterType
    label: string
}

@Injectable({providedIn: 'root'})
export class FiltersService {

    filters: Filter[] = [
        {id: 0, label: 'All'},
        {id: 1, label: 'Active'},
        {id: 2, label: 'Closed'}
    ];

}


