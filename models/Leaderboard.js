const Sequelize = require('sequelize');
const sequelize = require('../db/data');

const Leaderboard = sequelize.define('Leaderboard',{
    id:{
        type: Sequelize.STRING,
        primaryKey: true
    }
});

module.exports = Leaderboard;