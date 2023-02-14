const Sequelize = require('sequelize');
const db = require('./_db');

const Ingredient = db.define('ingredient', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    color: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
    }
});

module.exports = Ingredient;
