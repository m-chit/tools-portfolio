import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FilterModel} from '../../models/filter.model';

@Component({
    selector: 'app-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
    @Input() filterNames: { category: string, tags: string[] }[] = [];
    @Output() filterObjectEmitter = new EventEmitter<{ filterFav: boolean, favStatus: boolean, filters: FilterModel[] }>();
    filterObject: { filterFav: boolean, favStatus: boolean, filters: FilterModel[] };

    constructor() {
        this.filterObject = {filterFav: false, favStatus: false, filters: []};
    }

    onFavoritesChanged(filterFav: boolean) {
        this.filterObject.filterFav = filterFav;
        this.filterObjectEmitter.emit(this.filterObject);
    }

    onFilterChanged(filter: FilterModel, index: number) {
        this.filterObject.filters[index] = filter;
        this.filterObjectEmitter.emit(this.filterObject);
    }
}
