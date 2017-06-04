import {Injectable} from '@angular/core';
import {ToolModel} from '../models/tool.model';
import {FilterModel} from '../models/filter.model';
import {Http} from '@angular/http';
import {AuthService} from './auth.service';

@Injectable()
export class ToolsService {

    constructor(private http: Http, private authService: AuthService) {
    }

    getTools() {
        const token = this.authService.isAuthorised() ? '?token=' + localStorage.getItem('token') : '';
        return this.http.get('/api/tools' + token);
    }

    getTool(id: string) {
        const token = this.authService.isAuthorised() ? '?token=' + localStorage.getItem('token') : '';
        return this.http.get('/api/tools/' + id + token);
    }

    addTool(tool: ToolModel) {
        const token = this.authService.isAuthorised() ? '?token=' + localStorage.getItem('token') : '';
        return this.http.post('/api/tools' + token, tool);
    }

    deleteTool(id: string) {
        const token = this.authService.isAuthorised() ? '?token=' + localStorage.getItem('token') : '';
        return this.http.delete('/api/tools/' + id + token);
    }

    editTool(tool: ToolModel, id: string) {
        const token = this.authService.isAuthorised() ? '?token=' + localStorage.getItem('token') : '';
        return this.http.put('/api/tools/' + id + token, tool);
    }

    getCategoryNames(tools: ToolModel[]) {
        const toolCategories = tools.map(tool => tool.category);
        return toolCategories.reduce((acc, categoryName) => {
            if (!acc.includes(categoryName)) {
                acc = [...acc, categoryName];
            }
            return acc;
        }, []);
    }

    getFilterNames(tools: ToolModel[]) {
        return tools.reduce((acc, tool) => {
            const foundFilterName = acc.find(filterName => filterName.category === tool.category);
            if (foundFilterName === undefined) {
                acc = [...acc, {category: tool.category, tags: tool.tags}];
            } else {
                const setOfTags = new Set([...foundFilterName.tags, ...tool.tags]);
                foundFilterName.tags = Array.from(setOfTags);
            }
            return acc;
        }, []);
    }


    filterTools(tools: ToolModel[], filterObject: { filterFav: boolean, searchText: string, filters: FilterModel[] }) {
        const clearedFilters = filterObject.filters.filter(filter => filter !== undefined && filter.category !== '');
        let toolsToDisplay = tools;
        if (filterObject.filterFav) {
            toolsToDisplay = toolsToDisplay.filter(tool => tool.favorite);
        }
        if (filterObject.searchText.length !== 0) {
            toolsToDisplay = toolsToDisplay.filter(tool => tool.name.toUpperCase().includes(filterObject.searchText.toUpperCase()));
        }
        if (clearedFilters.length !== 0) {
            toolsToDisplay = toolsToDisplay.filter(tool => {
                const foundFilterName = clearedFilters.find(filterName => filterName.category === tool.category);
                if (foundFilterName === undefined) {
                    return false;
                } else {
                    return foundFilterName.tags.every(filterTag => tool.tags.includes(filterTag));
                }
            });
        }
        return toolsToDisplay;
    }
}
