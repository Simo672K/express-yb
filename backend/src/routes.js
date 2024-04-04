const express = require("express");
const router = express.Router();

const fs = require("fs");
const content = JSON.parse(fs.readFileSync(`${__dirname}/mock.json`));

router.get("/recipes", (req, res) => {
  res.json(content);
});

router.post("/recipes", (req, res) => {
  console.log(req.body);
  res.status(201).json(req.body);
});

router.get("/recipes/:id", (req, res) => {
  const recipeId = +req.params.id;
  if (content.length >= recipeId && recipeId > 0) {
    res.send(content[recipeId - 1]);
    return;
  }
  res.status(404).send("Recipe not found!");
});

router.delete("/recipes/:id", (req, res) => {});

router.put("/recipes/:id", (req, res) => {});

module.exports = router;
