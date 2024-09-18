const { DataTypes } = require('sequelize');
const sequelize = require('../config'); 

const AuthModel = sequelize.define('Survey', {
    AccountID: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    
    ApiKey: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
});

module.exports = AuthModel;
