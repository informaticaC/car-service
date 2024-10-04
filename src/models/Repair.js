const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Repair = sequelize.define('repair', {
    moanobra: {
        type: DataTypes.REAL,
        allowNull: true
    },
});

module.exports = Repair;