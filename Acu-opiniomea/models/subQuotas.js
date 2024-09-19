const { DataTypes } = require('sequelize');
const sequelize = require('../config');

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
      model: 'Quotas',
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

module.exports = subQuota;
