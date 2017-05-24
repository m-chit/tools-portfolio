import { Component, OnInit } from '@angular/core';
import {ToolsService} from '../../services/tools.service';
import {FilterModel} from '../../models/filter.model';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  filterNames: { category: string, tags: string[] }[];
  filterObject: {filterFav: boolean, favStatus: boolean, filters: FilterModel[]};

  constructor(private toolsService: ToolsService) {
    this.filterObject = {filterFav: false, favStatus: false, filters: []};
  }

  ngOnInit() {
    this.filterNames = this.toolsService.filterNames;
  }

  onFilterChanged(filter: FilterModel, index: number) {
    this.filterObject.filters[index] = filter;
    this.toolsService.filterTools(this.filterObject);
  }
}
