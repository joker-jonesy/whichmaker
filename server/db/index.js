const db = require('./_db');
const User = require('./user');
const Ingredient = require('./ingredient');
const Recipe = require("./recipe");
const {DataTypes} = require("sequelize");

console.log(User)

User.hasMany(Recipe);
Recipe.belongsTo(User)

Recipe.belongsToMany(Ingredient,{through: "ingredient-recipe"});
Ingredient.belongsToMany(Recipe, {through: "ingredient-recipe"});

module.exports = {
    db,
    User,
    Ingredient,
    Recipe
}