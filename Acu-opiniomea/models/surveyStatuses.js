const { DataTypes } = require('sequelize');
const sequelize = require('../config'); 

// Define the 'SurveyStatuses' model with Sequelize
const surveyStatuses = sequelize.define('Survey', {
    // Unique code for the survey status
    Code: {
        type: DataTypes.INTEGER,  // Data type for the 'Code' field
        allowNull: false,        // 'Code' cannot be null
    },
    
    // Name of the survey status
    Name: {
        type: DataTypes.STRING,  // Data type for the 'Name' field
        allowNull: false,        // 'Name' cannot be null
    },
    
}, {
    // Model configuration options can be added here if needed
    // e.g., tableName, timestamps, etc.
});

module.exports = surveyStatuses; // Export the model for use in other parts of the application
