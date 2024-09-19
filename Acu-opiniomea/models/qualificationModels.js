const { DataTypes } = require('sequelize');
const sequelize = require('./config');

const Qualification = sequelize.define('Qualification', {
    Age: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    Education: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    Experience: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    Gender: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    Country: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    State: {
        type: DataTypes.STRING,
        allowNull: true,
    }
});

module.exports = Qualification;
