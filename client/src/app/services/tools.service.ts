import {Injectable} from '@angular/core';
import {ToolModel} from '../models/tool.model';
import {FilterModel} from '../models/filter.model';
import {Http} from '@angular/http';

@Injectable()
export class ToolsService {

    constructor(private http: Http) {
    }

    getTools() {
        return this.http.get('/api/tools');
    }

    deleteTool(id: string) {
        return this.http.delete('/api/tools/' + id);
    }

    editTool(tool: ToolModel, id: string) {
        return this.http.put('/api/tools/' + id, tool);
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


    filterTools(tools: ToolModel[], filterObject: { filterFav: boolean, favStatus: boolean, filters: FilterModel[] }) {
        const clearedFilters = filterObject.filters.filter(filter => filter !== undefined && filter.category !== '');
        let toolsToDisplay = tools;
        if (filterObject.filterFav) {
            toolsToDisplay = toolsToDisplay.filter(tool => tool.favorite === filterObject.favStatus);
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
