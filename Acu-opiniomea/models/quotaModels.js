const { DataTypes } = require('sequelize');
const sequelize = require('../config');

// Define the 'Quota' model with Sequelize
const Quota = sequelize.define('Quota', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,  // Mark this as the primary key
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

// Export the model
module.exports = Quota;
