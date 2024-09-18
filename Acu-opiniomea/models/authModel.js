const { DataTypes } = require('sequelize');
const sequelize = require('../config'); 

const authModel = sequelize.define('Survey', {
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

module.exports = authModel;
