const Recipe = require("../models/recipeModel");

class RecipeController {
  static async getAllRecipes(id) {
    const recipe = await Recipe.find();
    return recipe;
  }

  static async createRecipe(recipe) {
    try {
      const newRecipe = new Recipe(recipe);
      await newRecipe.save();
    } catch (err) {
      console.log(err);
    }
  }

  static async getRecipe(id) {
    try {
      const recipe = await Recipe.findById(id);
      return recipe;
    } catch (err) {
      console.log(err);
    }
  }

  static async setRecipe(id) {
    const recipe = await Recipe.findById(id);
    recipe.deleteOne();
    return;
  }

  static async deleteRecipe(id) {
    const recipe = await Recipe.findById(id);
    recipe.deleteOne();
    return recipe;
  }
}

module.exports = RecipeController;
