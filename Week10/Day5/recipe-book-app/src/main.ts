import RecipeCollection from "./model/RecipeCollection";
import RecipeItem from "./model/RecipeItem";
import RecipeTemplate from "./templates/RecipeTemplate";

const initApp = (): void => {
  const recipeCollection = RecipeCollection.instance;
  recipeCollection.load();
  const recipeTemplate = new RecipeTemplate();

  recipeTemplate.render();

  const recipeEntryForm = document.getElementById(
    "recipeEntryForm"
  ) as HTMLFormElement;
  const clearButton = document.getElementById(
    "clearRecipesButton"
  ) as HTMLButtonElement;
  clearButton.addEventListener("click", () => {
    recipeCollection.clearRecipes();
    recipeTemplate.render();
  });

  // Handle adding a new recipe
  recipeEntryForm.addEventListener("submit", (e: SubmitEvent): void => {
    e.preventDefault();

    // get values from the input
    const title = (document.getElementById("recipeTitle") as HTMLInputElement)
      .value;

    const ingredientsText = (
      document.getElementById("ingredients") as HTMLTextAreaElement
    ).value;

    const instructions = (
      document.getElementById("instructions") as HTMLTextAreaElement
    ).value;

    const ingredients = ingredientsText
      .split("\n")
      .map((ingredient) => ingredient.trim())
      .filter(Boolean);

    // create a new recipe item
    const newRecipe = new RecipeItem(title, ingredients, instructions);
    recipeCollection.addRecipe(newRecipe);
    recipeTemplate.render();

    // clear the form
    recipeEntryForm.reset();
  });
};

initApp();
