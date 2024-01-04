const Sequelize = require('sequelize');
const sequelize = require('../db/data');

const UserList = sequelize.define('UserList',{
    User_idUser: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    Leaderboard_idLeaderboard: {
        type: Sequelize.STRING,
        primaryKey: true
    }
});

module.exports  = UserList;