const express = require("express");
const router = express.Router();
const recipeController = require("./controllers/recipeController");

router.get("/recipes", (req, res) => {
  const recipes = recipeController.getAllRecipes();

  recipes.then((r) => {
    res.json(r);
  });
});

router.post("/recipes", (req, res) => {
  const { newRecipe } = req.body;
  recipeController
    .createRecipe(newRecipe)
    .then((d) => {
      res.status(201).json(d);
    })
    .catch((e) => console.log(e));
});

router.get("/recipes/:id", (req, res) => {
  const recipe = recipeController.getRecipe(req.params.id);

  recipe
    .then((r) => {
      if (r) {
        res.json(r);
        return;
      }
      res.status(404).send("Recipe not found!");
    })
    .catch((e) => {
      console.log(e);
    });
});

router.delete("/recipes/:id", (req, res) => {
  recipeController.deleteRecipe(req.params.id);
  res.status(204).send();
});

router.put("/recipes/:id", (req, res) => {
  const { updatedRecipe } = req.body;
  recipeController.setRecipe(req.params.id, updatedRecipe);
  res.status(204).send();
});

module.exports = router;
