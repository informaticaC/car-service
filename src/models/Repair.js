const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Repair = sequelize.define('repair', {
    moanobra: {
        type: DataTypes.REAL,
        allowNull: true,
        defaultValue:0

    },
    repuestos: {
        type: DataTypes.REAL,
        allowNull: true,
        defaultValue:0
        
    }
});

module.exports = Repair;