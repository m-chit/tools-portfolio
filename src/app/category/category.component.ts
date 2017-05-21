import {Component, Input} from '@angular/core';
import {ToolsService} from '../services/tools.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  @Input() name: string;
  checkbox = false;

  constructor(private toolsService: ToolsService) {
  }

  onCheckboxChange(newCheckbox: boolean) {
    this.checkbox = newCheckbox;
    this.toolsService.categoryChange(this.name, this.checkbox);
  }


}
