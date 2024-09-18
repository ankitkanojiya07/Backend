const { DataTypes } = require('sequelize');
const sequelize = require('../config'); 

// Define the 'Survey' model with Sequelize
const Survey = sequelize.define('Survey', {
    // Name of the project
    projectName: {
        type: DataTypes.STRING,  // Data type for the 'projectName' field
        allowNull: false,        // 'projectName' cannot be null
    },

    // Account identifier associated with the survey
    AccountID: {
        type: DataTypes.INTEGER, // Data type for the 'AccountID' field
        allowNull: false,        // 'AccountID' cannot be null
    },
    
    // Status code of the survey
    SurveyStatusCode: {
        type: DataTypes.STRING,  // Data type for the 'SurveyStatusCode' field
        allowNull: true,         // 'SurveyStatusCode' can be null
    },
    
    // Language identifier for the country
    CountryLanguageID: {
        type: DataTypes.INTEGER, // Data type for the 'CountryLanguageID' field
        allowNull: true,         // 'CountryLanguageID' can be null
    },
    
    // Industry identifier
    IndustryID: {
        type: DataTypes.INTEGER, // Data type for the 'IndustryID' field
        allowNull: false,        // 'IndustryID' cannot be null
    },
    
    // Study type identifier
    StudyTypeID: {
        type: DataTypes.INTEGER, // Data type for the 'StudyTypeID' field
        allowNull: false,        // 'StudyTypeID' cannot be null
    },

    // Client Cost Per Interview
    ClientCPI: {
        type: DataTypes.DOUBLE,  // Data type for the 'ClientCPI' field
        allowNull: false,        // 'ClientCPI' cannot be null
    },
  
    // Live URL of the client survey
    ClientSurveyLiveURL: {
        type: DataTypes.STRING,  // Data type for the 'ClientSurveyLiveURL' field
        allowNull: true,         // 'ClientSurveyLiveURL' can be null
    },
 
    // Redirect URL for test surveys
    TestRedirectURL: {
        type: DataTypes.STRING,  // Data type for the 'TestRedirectURL' field
        allowNull: false,        // 'TestRedirectURL' cannot be null
    },

    // Indicates whether the survey is active
    IsActive: {
        type: DataTypes.BOOLEAN, // Data type for the 'IsActive' field
        allowNull: false,        // 'IsActive' cannot be null
    },

    // Quota for the survey
    Quota: {
        type: DataTypes.INTEGER, // Data type for the 'Quota' field
        allowNull: false,        // 'Quota' cannot be null
    },

    // Name of the survey
    SurveyName: {
        type: DataTypes.STRING,  // Data type for the 'SurveyName' field
        allowNull: true,         // 'SurveyName' can be null
    },

    // Number of completes
    Completes: {
        type: DataTypes.INTEGER, // Data type for the 'Completes' field
        allowNull: true,         // 'Completes' can be null
    },

    // Timestamp for when the survey was created
    createdAt: {
        type: DataTypes.DATE,    // Data type for the 'createdAt' field
        defaultValue: DataTypes.NOW, // Default value is the current date and time
    },

    // Timestamp for when the survey was last updated
    updatedAt: {
        type: DataTypes.DATE,    // Data type for the 'updatedAt' field
        defaultValue: DataTypes.NOW, // Default value is the current date and time
    },

    // Status of the survey
    status: {
        type: DataTypes.STRING,  // Data type for the 'status' field
        allowNull: true,         // 'status' can be null
    },

    // Unique identifier for the survey
    id: {
        type: DataTypes.INTEGER, // Data type for the 'id' field
        primaryKey: true,        // 'id' is the primary key of the table
        autoIncrement: true,     // Automatically increment the ID value
    },

    // Timestamp for when the survey ended
    endedAt: {
        type: DataTypes.DATE,    // Data type for the 'endedAt' field
        allowNull: true,         // 'endedAt' can be null
    },

    // Country associated with the survey
    country: {
        type: DataTypes.STRING,  // Data type for the 'country' field
        allowNull: true,         // 'country' can be null
    },
}, {
    timestamps: true, // Enable automatic 'createdAt' and 'updatedAt' fields
});

module.exports = Survey; // Export the model for use in other parts of the application
