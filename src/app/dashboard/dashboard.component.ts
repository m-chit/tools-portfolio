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
  toolsListCategory: ToolModel[] = [];
  toolsListTag: ToolModel[] = [];

  constructor(private toolsService: ToolsService) {
  }

  ngOnInit() {
    this.toolsListCategory = this.toolsService.toolsList.reduce((acc, value) => {
      if (acc.find(category => category === value.category) === undefined) {
        acc = [...acc, value.category];
      }
      return acc;
    }, []);
    this.toolsList = this.toolsService.toolsList;
  }

}
