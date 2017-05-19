export class ToolModel {
  name: string;
  details: string;
  image: string;
  favorite: boolean;
  category: string;

  constructor(name: string, details: string, image: string, favorite: boolean, category: string) {
    this.name = name;
    this.details = details;
    this.image = image;
    this.favorite = favorite;
    this.category = category;
  }
}
