const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeShema = new Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", recipeShema);
