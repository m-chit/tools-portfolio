export class ToolModel {
    _id?: string;
    name: string;
    details: string;
    image: string;
    link: string;
    favorite: boolean;
    category: string;
    tags: string[];

    constructor(name: string, details: string, image: string, link: string, favorite: boolean, category: string, tags: string[]) {
        this.name = name;
        this.details = details;
        this.image = image;
        this.link = link;
        this.favorite = favorite;
        this.category = category;
        this.tags = tags;
    }
}
