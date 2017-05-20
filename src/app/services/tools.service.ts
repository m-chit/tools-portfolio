import {Injectable} from '@angular/core';
import {ToolModel} from '../models/tool.model';
import {DataService} from './data.service';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ToolsService {
  filteredTools: ToolModel[] = [];
  toolsList: ToolModel[] = [];
  toolsListCategory: {name: string, isActive: boolean}[];
  filteredToolsSubject: Subject<ToolModel[]> = new Subject();

  constructor(private dataService: DataService) {
    this.toolsList = this.dataService.toolsList;
    this.toolsListCategory = this.toolsList.reduce((acc, value) => {
      if (acc.find(category => category.name === value.category) === undefined) {
        acc = [...acc, {name: value.category, isActive: false}];
      }
      return acc;
    }, []);
    this.filteredTools = this.toolsList;
  }

  categoryChange(name: string, isActive: boolean) {
    const currentCategory = this.toolsListCategory.find(category => category.name === name);
    if (currentCategory !== undefined) {
      currentCategory.isActive = isActive;
    }
    this.reloadFilters();
  }
  reloadFilters() {
    const activeCategories = this.toolsListCategory.filter((current) => current.isActive);
    if (activeCategories.length === 0) {
      this.filteredTools = this.toolsList;
    } else {
      this.filteredTools = this.toolsList.filter((current) => {
        return activeCategories.find((category) => category.name === current.category) !== undefined;
      });
    }
    this.filteredToolsSubject.next(this.filteredTools);
  }
}
