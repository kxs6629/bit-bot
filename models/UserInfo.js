const Sequelize = require('sequelize');
const sequelize = require('../db/data');

const UserInfo = sequelize.define('UserInfo',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    guild_id:{
        type: Sequelize.STRING,
        allowNull: false
    },
    user_id:{
        type: Sequelize.STRING,
        allowNull: false
    },
    score:{
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false,
    }
});

module.exports = UserInfo;