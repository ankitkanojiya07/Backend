// Import the necessary Sequelize components
const { DataTypes } = require('sequelize');
const sequelize = require('../config');

// Define the Detail model with Sequelize
const Detail = sequelize.define('Detail', {  // Model name is 'Detail', which reflects its purpose
    id: {
        type: DataTypes.INTEGER,       // Data type for the 'id' field
        primaryKey: true,              // Marks this field as the primary key of the model
        autoIncrement: true,           // Automatically increment this field's value with each new record
    },
    SurveyId: {
        type: DataTypes.INTEGER,       // Data type for the 'SurveyId' field
        allowNull: false,              // 'SurveyId' field must have a value (cannot be null)
    },
    Live_Url: {
        type: DataTypes.STRING,        // Data type for the 'Live_Url' field
        allowNull: false,              // 'Live_Url' field must have a value (cannot be null)
    },
    Test_Url: {
        type: DataTypes.STRING,        // Data type for the 'Test_Url' field
        allowNull: false,              // 'Test_Url' field must have a value (cannot be null)
    },
    Survey_CPI: {
        type: DataTypes.STRING,        // Data type for the 'Survey_CPI' field
        allowNull: false,              // 'Survey_CPI' field must have a value (cannot be null)
    },
    Client_CPI: {
        type: DataTypes.STRING,        // Data type for the 'Client_CPI' field
        allowNull: false,              // 'Client_CPI' field must have a value (cannot be null)
    },
});

// Export the Detail model for use in other parts of the application
module.exports = Detail;
