import {Component, OnInit} from '@angular/core';
import {ToolsService} from '../services/tools.service';
import {ToolModel} from '../models/tool.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  toolsList: ToolModel[] = [];
  toolsListCategory: { name: string, isActive: boolean }[];

  constructor(private toolsService: ToolsService) {
  }

  ngOnInit() {
    this.toolsList = this.toolsService.filteredTools;
    this.toolsListCategory = this.toolsService.toolsListCategory;
    this.toolsService.filteredToolsSubject.subscribe(
      (value) => this.toolsList = value
    );
  }
}
