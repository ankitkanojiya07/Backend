const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const studyTypes = sequelize.define('StudyTypes', {
  Code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = studyTypes;
