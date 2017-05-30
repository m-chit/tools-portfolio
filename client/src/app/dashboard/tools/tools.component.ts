import {Component, OnInit} from '@angular/core';
import {ToolModel} from '../../models/tool.model';
import {ToolsService} from '../../services/tools.service';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {
  tools: ToolModel[] = [];

  constructor(private toolsService: ToolsService) {
  }

  ngOnInit() {
   this.toolsService.ToolsSubject.subscribe(
     (response: ToolModel[]) => this.tools = response
   );
  this.tools = this.toolsService.toolsToDisplay;
   this.toolsService.filteredToolsSubject.subscribe(
    (data: ToolModel[]) => this.tools = data
   );
  }
}
