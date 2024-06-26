const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeShema = new Schema({
  title: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Recipe", recipeShema, "recipes");
