const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const Survey = sequelize.define('Survey', {
    projectName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    AccountID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    SurveyStatusCode: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    CountryLanguageID: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    IndustryID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    StudyTypeID: {
        type: DataTypes.INTEGER,
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
    QuotaID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    SurveyName: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    Completes: {
        type: DataTypes.INTEGER,
        allowNull: true,
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
        type: DataTypes.STRING,
        allowNull: true,
    },
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    endedAt: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    country: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    timestamps: true,
});

module.exports = Survey;
