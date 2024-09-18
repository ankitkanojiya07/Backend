// Import the necessary Sequelize components
const { DataTypes } = require('sequelize');
const sequelize = require('../config');

// Define the AuthModel with Sequelize
const AuthModel = sequelize.define('Survey', {  // Model name 'Survey' might be misleading for this model
    AccountID: {
        type: DataTypes.INTEGER,       // Data type for the 'AccountID' field
        primaryKey: true,              // Marks this field as the primary key of the model
        autoIncrement: true,           // Automatically increment this field's value
    },
    ApiKey: {
        type: DataTypes.STRING,        // Data type for the 'ApiKey' field
        allowNull: false,              // 'ApiKey' field must have a value (cannot be null)
    },
});

// Export the AuthModel for use in other parts of the application
module.exports = AuthModel;
