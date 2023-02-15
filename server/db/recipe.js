const Sequelize = require('sequelize');
const db = require('./_db');
const {Ingredient} = require("./ingredient");

const Recipe = db.define('recipe', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
    }
});

Recipe.getEverything = async function(){
    const recipes = await Recipe.findAll({
        include: Ingredient
    })

    return recipes;
}

module.exports = Recipe;
