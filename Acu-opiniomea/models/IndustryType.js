const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const IndustryType = sequelize.define('Survey', {
    Code: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = IndustryType;
