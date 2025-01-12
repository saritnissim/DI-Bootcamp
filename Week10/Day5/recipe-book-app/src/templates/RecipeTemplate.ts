import RecipeCollection from "../model/RecipeCollection";
import RecipeItem from "../model/RecipeItem";

class RecipeTemplate {
  recipeCollection = RecipeCollection.instance;

  render(): void {
    const recipeContainer = document.getElementById(
      "recipeContainer"
    ) as HTMLDivElement;
    recipeContainer.innerHTML = ""; // Clear the container before re-rendering
    this.recipeCollection.recipes.forEach((recipe) => {
      const recipeCard = this.createRecipeCard(recipe);
      recipeContainer.appendChild(recipeCard);
    });
  }

  //Clear all recipes
  clearRecipes(): void {
    this.recipeCollection.recipes = [];
    this.recipeCollection.save();
    this.render();
  }

  createRecipeCard(recipe: RecipeItem): HTMLDivElement {
    const card = document.createElement("div");
    card.classList.add("card");

    //Title
    const title = document.createElement("h3");
    title.textContent = recipe.title;
    card.appendChild(title);

    //Ingredients
    const ingredients = document.createElement("p");
    ingredients.classList.add("hidden"); // Start hidden
    ingredients.textContent = `Ingredients: ${recipe.getIngredientsAsString()}`;
    card.appendChild(ingredients);

    //Instructions
    const instructions = document.createElement("p");
    instructions.classList.add("hidden"); // Start hidden
    instructions.textContent = `Instructions: ${recipe.instructions}`;
    card.appendChild(instructions);

    // Add Favorite/Unfavorite func
    const favoriteButton = document.createElement("button");
    favoriteButton.textContent = recipe.isFavorite ? "Unfavorite" : "Favorite";
    favoriteButton.addEventListener("click", () => {
      this.recipeCollection.toggleFavorite(recipe.id);
      this.render();
    });
    card.appendChild(favoriteButton);

    // Add Delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      this.recipeCollection.removeRecipe(recipe.id);
      this.render();
    });
    card.appendChild(deleteButton);

    //Show/Hide Recipe Details
    const showHideButton = document.createElement("button");
    showHideButton.textContent = ingredients.classList.contains("hidden")
      ? "Show Details"
      : "Hide Details";
    showHideButton.addEventListener("click", () => {
      ingredients.classList.toggle("hidden");
      instructions.classList.toggle("hidden");

      // Update button text
      if (ingredients.classList.contains("hidden")) {
        showHideButton.textContent = "Show Details";
      } else {
        showHideButton.textContent = "Hide Details";
      }
    });
    card.appendChild(showHideButton);

    return card;
  }
}
export default RecipeTemplate;
