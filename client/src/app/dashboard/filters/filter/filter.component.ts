import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FilterModel} from '../../../models/filter.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input() name: string;
  @Input() tags: string[];
  filter: FilterModel = {category: '', tags: []};
  @Output() filterChanged = new EventEmitter<FilterModel>();

  constructor() {
  }

  onCategoryChange(isCategoryChecked: boolean) {
    if (isCategoryChecked) {
      this.filter.category = this.name;
    } else {
      this.filter.category = '';
      this.filter.tags = [];
    }
    this.filterChanged.emit(this.filter);
  }

  onTagChange(isTagChecked: boolean, tagIndex: number) {
    if (isTagChecked) {
      this.filter.tags = [...this.filter.tags, this.tags[tagIndex]];
    } else {
      this.filter.tags = this.filter.tags.filter(tag => tag !== this.tags[tagIndex]);
    }
    this.filterChanged.emit(this.filter);
  }
}
