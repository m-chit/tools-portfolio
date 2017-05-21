import {Injectable} from '@angular/core';
import {ToolModel} from '../models/tool.model';
import {DataService} from './data.service';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ToolsService {
  filteredTools: ToolModel[] = [];
  filteredFavTools: ToolModel[] = [];
  toolsList: ToolModel[] = [];
  toolsListCategory: { name: string, isActive: boolean }[];
  filteredToolsSubject: Subject<ToolModel[]> = new Subject();
  favorites = false;

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
    if (name !== 'Favorites') {
      const currentCategory = this.toolsListCategory.find(category => category.name === name);
      if (currentCategory !== undefined) {
        currentCategory.isActive = isActive;
      }
      if (this.favorites) {
        this.reloadFavorites();
      } else {
        this.reloadFilters();
      }
    } else {
      this.favorites = isActive;
      this.reloadFavorites();
    }
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

  reloadFavorites() {
    if (this.favorites) {
      const activeCategories = this.toolsListCategory.filter((current) => current.isActive);
      this.filteredTools = this.toolsList.filter((current) => current.favorite);
      if (activeCategories.length === 0) {
        this.filteredToolsSubject.next(this.filteredTools);
      } else {
        this.filteredFavTools = this.filteredTools.filter((current) => {
          return activeCategories.find((category) => category.name === current.category) !== undefined;
        });
        this.filteredToolsSubject.next(this.filteredFavTools);
      }
    } else {
      this.reloadFilters();
    }
  }
}
