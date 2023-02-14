const Sequelize = require('sequelize');
const db = require('./_db');

const User = db.define('user', {
    fName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
    },
    lName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    bio: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
    }
});

module.exports = User;
