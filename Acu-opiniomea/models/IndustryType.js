// Import the necessary Sequelize components
const { DataTypes } = require('sequelize');
const sequelize = require('../config');

// Define the IndustryType model with Sequelize
const IndustryType = sequelize.define('Survey', {  // Model name 'Survey' might be confusing for this model
    Code: {
        type: DataTypes.STRING,  // Data type for the 'Code' field
        allowNull: false,        // 'Code' field must have a value (cannot be null)
    },
    Name: {
        type: DataTypes.STRING,  // Data type for the 'Name' field
        allowNull: false,        // 'Name' field must have a value (cannot be null)
    },
});

// Export the IndustryType model for use in other parts of the application
module.exports = IndustryType;
