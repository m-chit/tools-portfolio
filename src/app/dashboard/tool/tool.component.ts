import {Component, Input, OnInit} from '@angular/core';
import { ToolModel } from '../../models/tool.model';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.css']
})
export class ToolComponent implements OnInit {
  @Input('Tool') tool: ToolModel;
  constructor() { }

  ngOnInit() {
  }

}
