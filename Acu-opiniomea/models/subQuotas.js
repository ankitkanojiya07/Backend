const { DataTypes } = require('sequelize');
const sequelize = require('../config');

// Define the 'subQuota' model with Sequelize
const subQuota = sequelize.define('subQuota', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  quotaId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Quotas',  // Reference the 'Quota' model
      key: 'id',
    },
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age_min: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  age_max: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  completes: {
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
module.exports = subQuota;
