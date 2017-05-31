export class ToolModel {
    name: string;
    details: string;
    image: string;
    favorite: boolean;
    category: string;
    tags: string[];

    constructor(name: string, details: string, image: string, favorite: boolean, category: string, tags: string[]) {
        this.name = name;
        this.details = details;
        this.image = image;
        this.favorite = favorite;
        this.category = category;
        this.tags = tags;
    }
}
