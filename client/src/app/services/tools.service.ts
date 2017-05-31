import {Injectable} from '@angular/core';
import {ToolModel} from '../models/tool.model';
import {FilterModel} from '../models/filter.model';
import {Subject} from 'rxjs/Subject';
import {Http} from '@angular/http';

@Injectable()
export class ToolsService {
    tools: ToolModel[] = [];
    filterNames: { category: string, tags: string[] }[];
    toolsToDisplay: ToolModel[] = [];
    filteredToolsSubject = new Subject();
    ToolsSubject = new Subject();
    FiltersSubject = new Subject();

    constructor(private http: Http) {
        this.http.get('/api/tools').subscribe(
            (response) => {
                this.tools = response.json();
                this.toolsToDisplay = this.tools;
                this.ToolsSubject.next(this.toolsToDisplay);
                this.getFilterNames();
            }
        );
    }

    getFilterNames() {
        this.filterNames = this.tools.reduce((filterNames, tool) => {
            const foundFilterName = filterNames.find(filterName => filterName.category === tool.category);
            if (foundFilterName === undefined) {
                filterNames = [...filterNames, {category: tool.category, tags: tool.tags}];
            } else {
                const setOfTags = new Set([...foundFilterName.tags, ...tool.tags]);
                foundFilterName.tags = Array.from(setOfTags);
            }
            return filterNames;
        }, []);
        this.FiltersSubject.next(this.filterNames);
    }

    filterTools(filterObject: { filterFav: boolean, favStatus: boolean, filters: FilterModel[] }) {
        const clearedFilters = filterObject.filters.filter(filter => filter !== undefined && filter.category !== '');
        this.toolsToDisplay = this.tools;
        if (filterObject.filterFav) {
            this.toolsToDisplay = this.toolsToDisplay.filter(tool => tool.favorite === filterObject.favStatus);
        }
        if (clearedFilters.length !== 0) {
            this.toolsToDisplay = this.toolsToDisplay.filter(tool => {
                const foundFilterName = clearedFilters.find(filterName => filterName.category === tool.category);
                if (foundFilterName === undefined) {
                    return false;
                } else {
                    return foundFilterName.tags.every(filterTag => tool.tags.includes(filterTag));
                }
            });
        }
        this.filteredToolsSubject.next(this.toolsToDisplay);
    }
}
