const db = require('./_db');
const User = require('./user');
const Ingredient = require('./ingredient');
const Recipe = require("./recipe");
const {DataTypes} = require("sequelize");

console.log(User)

User.hasMany(Recipe);
Recipe.belongsTo(User)

const Ingredient_Recipe = db.define('"ingredient-recipe"',{
    selfGranted: DataTypes.BOOLEAN
}, { timestamps: false })
Recipe.belongsToMany(Ingredient,{through: Ingredient_Recipe});
Ingredient.belongsToMany(Recipe, {through: Ingredient_Recipe});

module.exports = {
    db,
    User,
    Ingredient,
    Recipe
}