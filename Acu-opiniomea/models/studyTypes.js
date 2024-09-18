// Import the necessary Sequelize components
const { DataTypes } = require('sequelize');
// Import the Sequelize instance from the configuration file
const sequelize = require('../config'); 

// Define the 'studyTypes' model with Sequelize
const studyTypes = sequelize.define('StudyTypes', {  // Changed model name to 'StudyTypes'
    Code: {
        type: DataTypes.STRING,  // Data type for the 'Code' field
        allowNull: false,        // 'Code' cannot be null
    },

    ID: {
        type: DataTypes.INTEGER, // Data type for the 'ID' field
        allowNull: false,        // 'ID' cannot be null
        autoIncrement: true,     // Automatically increment the ID value
        primaryKey: true,        // 'ID' is the primary key of the table
    },
    
    Name: {
        type: DataTypes.STRING,  // Data type for the 'Name' field
        allowNull: false,        // 'Name' cannot be null
    },
    
});

// Export the 'studyTypes' model for use in other parts of the application
module.exports = studyTypes;
