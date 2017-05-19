import {Component, OnInit} from '@angular/core';
import {ToolsService} from '../services/tools.service';
import {ToolModel} from '../models/tool.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  toolsList: ToolModel[];
  toolsListC1: ToolModel[] = [];
  toolsListC2: ToolModel[] = [];

  constructor(private toolsService: ToolsService) {
  }

  ngOnInit() {
    this.toolsList = this.toolsService.toolsList;
    this.toolsListC1 = this.toolsList.filter((current) => current.category === 'c1');
    this.toolsListC2 = this.toolsList.filter((current) => current.category === 'c2');
  }

}
