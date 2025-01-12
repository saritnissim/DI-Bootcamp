import RecipeItem from "./RecipeItem";

class RecipeCollection {
  recipes: RecipeItem[] = [];
  static instance: RecipeCollection = new RecipeCollection();

  constructor() {
    this.recipes = [];
  }
  //Clear all recipes

  clearRecipes(): void {
    this.recipes = [];
    this.save();
  }

  // Add a new recipe to the collection
  addRecipe(recipe: RecipeItem): void {
    this.recipes.push(recipe);
    this.save();
  }

  //Remove a recipe from the collection
  removeRecipe(id: string): void {
    this.recipes = this.recipes.filter((recipe) => recipe.id !== id);
    this.save();
  }

  //Toggle the favorite status of a recipe
  toggleFavorite(id: string): void {
    const recipe = this.recipes.find((recipe) => recipe.id === id);
    if (recipe) {
      recipe.isFavorite = !recipe.isFavorite;
    }
    this.save();
  }

  //Save to local storage
  save(): void {
    localStorage.setItem("recipeCollection", JSON.stringify(this.recipes));
  }

  //Load from local storage
  load(): void {
    const recipeCollection = localStorage.getItem("recipeCollection");
    if (recipeCollection) {
      this.recipes = JSON.parse(recipeCollection).map(
        (recipe: any) =>
          new RecipeItem(recipe.title, recipe.ingredients, recipe.instructions)
      );
    }
  }
}

export default RecipeCollection;
