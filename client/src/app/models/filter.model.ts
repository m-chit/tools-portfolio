export class FilterModel {
    category: string;
    tags: string[];

    constructor(category: string, tags: string[]) {
        this.category = category;
        this.tags = tags;
    }
}


