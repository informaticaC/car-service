const { all } = require('../routes');
const sequelize = require('../utils/connections');
const { DataTypes } = require('sequelize');

const TypeOfService = sequelize.define('TypeOfService',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,    
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {

    });