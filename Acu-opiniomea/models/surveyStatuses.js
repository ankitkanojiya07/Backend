const { DataTypes } = require('sequelize');
const sequelize = require('../config'); 

const surveyStatuses = sequelize.define('SurveyStatuses', {
    Code: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = surveyStatuses;
