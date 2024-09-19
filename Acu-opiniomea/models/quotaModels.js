const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const Quota = sequelize.define('Quota', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  QuotaName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  targetCountry: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  tatolCompletes: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = Quota;
