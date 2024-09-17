const { DataTypes } = require('sequelize');
const sequelize = require('../config'); 

const Survey = sequelize.define('Survey', {
    projectName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
    SurveyName: {
        type: DataTypes.STRING,
    },
    Completes: {
        type: DataTypes.INTEGER, // Use INTEGER instead of NUMBER
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    status: {
        type: DataTypes.STRING, // Use INTEGER instead of NUMBER
    },
    id: {
        type: DataTypes.INTEGER, // Use INTEGER instead of NUMBER
        primaryKey: true,
        autoIncrement: true, // Add autoIncrement
    },
    endedAt: {
        type: DataTypes.DATE
    },
    country: {
        type: DataTypes.STRING
    },
}, {
    timestamps: true,
});

module.exports = Survey;
