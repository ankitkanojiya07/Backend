const { DataTypes } = require('sequelize');
const sequelize = require('../config'); 

const Survey = sequelize.define('Survey', {
    projectName: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    AccountID: {
        type: DataTypes.INTEGER, // Changed to DataTypes.INTEGER
        allowNull: false,
    },
    
    SurveyStatusCode: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    
    CountryLanguageID: {
        type: DataTypes.INTEGER, // Changed to DataTypes.INTEGER
        allowNull: true,
    },
    
    IndustryID: {
        type: DataTypes.INTEGER, // Changed to DataTypes.INTEGER
        allowNull: false,
    },
    
    StudyTypeID: {
        type: DataTypes.INTEGER, // Changed to DataTypes.INTEGER
        allowNull: false,
    },

    ClientCPI: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
  
    ClientSurveyLiveURL: {
        type: DataTypes.STRING,
        allowNull: true,
    },
 
    TestRedirectURL: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    IsActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },

    Quota: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    SurveyName: {
        type: DataTypes.STRING, // Removed duplicate
    },

    Completes: {
        type: DataTypes.INTEGER, // Changed to DataTypes.INTEGER
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
        type: DataTypes.STRING, // Changed to DataTypes.STRING
    },

    id: {
        type: DataTypes.INTEGER, // Changed to DataTypes.INTEGER
        primaryKey: true,
        autoIncrement: true, // Added autoIncrement
    },

    endedAt: {
        type: DataTypes.DATE,
    },

    country: {
        type: DataTypes.STRING,
    },
}, {
    timestamps: true,
});

module.exports = Survey;
