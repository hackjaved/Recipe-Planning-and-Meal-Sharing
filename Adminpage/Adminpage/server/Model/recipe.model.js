// recipe.model.js
const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    nameOfRecipe: String,
    ingredients: String,
    procedure: String,
    dietInformation: String,
    image: String,
});

module.exports = mongoose.model('Recipe', recipeSchema);
