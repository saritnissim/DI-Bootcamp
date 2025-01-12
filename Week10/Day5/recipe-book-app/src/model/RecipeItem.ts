import { v4 as uuidv4 } from "uuid";

class RecipeItem {
  public id: string;

  constructor(
    public title: string,
    public ingredients: string[],
    public instructions: string,
    public isFavorite: boolean = false // Default value for isFavorite is false
  ) {
    this.id = uuidv4(); // Generate a unique ID when a new instance is created
  }

  getIngredientsAsString(): string {
    return this.ingredients.join(", ");
  }
}

export default RecipeItem;
