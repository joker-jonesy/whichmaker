const Sequelize = require('sequelize');
const db = require('./_db');

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

module.exports = Recipe;
