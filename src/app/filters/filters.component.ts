import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FiltersService} from "../shared/filters.service";

export type filterType = 0 | 1 | 2;

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  @Output() onSetFilter = new EventEmitter<filterType>();

  currentFilterIndex = 0;

  constructor(public filtersService: FiltersService) { }

  ngOnInit() {

  }

  onClick(id: filterType) {
    this.onSetFilter.emit(id);
    this.currentFilterIndex = id;
    // this.tasksServes.setFilter(id);
  }

}
