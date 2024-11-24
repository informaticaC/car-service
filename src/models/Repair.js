const sequelize = require('../utils/connections'); //const sequelize = new Sequelize(process.env.DATABASE_URL);
const { DataTypes } = require('sequelize');

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