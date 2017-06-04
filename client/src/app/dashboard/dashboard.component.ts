import {Component, OnInit} from '@angular/core';
import {ToolsService} from '../services/tools.service';
import {ToolModel} from '../models/tool.model';
import {FilterModel} from '../models/filter.model';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    tools: ToolModel[] = [];
    toolsToDisplay: ToolModel[] = [];
    filterNames: { category: string, tags: string[] }[] = [];

    constructor(private toolsService: ToolsService) {
    }

    ngOnInit() {
        this.toolsService.getTools().subscribe(
            (response) => {
                this.tools = response.json();
                this.toolsToDisplay = this.tools;
                this.filterNames = this.toolsService.getFilterNames(this.tools);
            }
        );
    }

    getFilterTools(filterObject: { filterFav: boolean, searchText: string, filters: FilterModel[] }) {
        this.toolsToDisplay = this.toolsService.filterTools(this.tools, filterObject);
    }
}
