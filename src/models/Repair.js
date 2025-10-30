const sequelize = require('../utils/connections'); 
const { DataTypes } = require('sequelize');

const User = require('./User');

const Repair = sequelize.define('repair', {
    labor: {
        type: DataTypes.REAL,
        allowNull: true,
        defaultValue:0

    },
    parts: {
        type: DataTypes.REAL,
        allowNull: true,
        defaultValue:0
        
    }
});



module.exports = Repair;