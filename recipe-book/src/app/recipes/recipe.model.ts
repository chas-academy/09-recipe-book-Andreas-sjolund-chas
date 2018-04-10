export class Recipe {
  id: number;
  name: string;
  category: string;
  country: string;
  instructions: string;
  photoUrl: string;
  youtubeUrl: string;
  ingredients: string[];


  constructor(
    id: number,
    name: string,
    category: string,
    country: string,
    instructions: string,
    photoUrl: string,
    youtubeUrl: string,
    ingredients: string[]
  ) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.country = country;
    this.instructions = instructions;
    this.photoUrl = photoUrl;
    this.youtubeUrl = youtubeUrl;
    this.ingredients = ingredients;
  }
}
