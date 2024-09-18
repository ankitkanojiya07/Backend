// Import the necessary Sequelize components
const { DataTypes } = require('sequelize');
// Import the Sequelize instance from the configuration file
const sequelize = require('./config');  // Corrected 'route' to 'require'

// Define the Qualification model with Sequelize
const Qualification = sequelize.define('Qualification', {  // Model name is 'Qualification'
    Age: {
        type: DataTypes.INTEGER,    // Data type for the 'Age' field
        allowNull: true,            // Allows the field to be null (optional)
    },
    Education: {
        type: DataTypes.STRING,     // Data type for the 'Education' field
        allowNull: true,            // Allows the field to be null (optional)
    },
    Experience: {
        type: DataTypes.STRING,     // Data type for the 'Experience' field
        allowNull: true,            // Allows the field to be null (optional)
    },
    Gender: {
        type: DataTypes.STRING,     // Data type for the 'Gender' field
        allowNull: true,            // Allows the field to be null (optional)
    },
    Country: {
        type: DataTypes.STRING,     // Data type for the 'Country' field
        allowNull: true,            // Allows the field to be null (optional)
    },
    State: {
        type: DataTypes.STRING,     // Data type for the 'State' field
        allowNull: true,            // Allows the field to be null (optional)
    }
});

// Export the Qualification model for use in other parts of the application
module.exports = Qualification;
