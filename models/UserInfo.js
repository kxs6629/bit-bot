const Sequelize = require('sequelize');
const sequelize = require('../db/data');

const UserInfo = sequelize.define('UserInfo',{
    id: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    score: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false
    }
});

module.exports = UserInfo;