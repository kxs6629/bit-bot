const Sequelize = require('sequelize');
const sequelize = require('../db/data');

const UserInfo = sequelize.define('UserInfo',{
    id: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    score: {
        type: Sequelize.INTEGER,
        // get(){
        //     const curScore = this.getDataValue('score')
        //     return curScore;
        // },
        defaultValue: 0,
        allowNull: false
    }
});

module.exports = UserInfo;