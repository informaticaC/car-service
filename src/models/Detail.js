const sequelize = require('../utils/connections');
const { DataTypes } = require('sequelize');
const Repair = require('./Repair');

const Detail = sequelize.define( 'detail', {
    kilometers: {
        type : DataTypes.INTEGER,
        allowNull: false
    },
    chofer: {
        type : DataTypes.STRING,
        allowNull: false
    },
    short_desc: {
        type : DataTypes.STRING,
        allowNull: false
    },
    long_desc: {
        type : DataTypes.STRING,
    }
});


module.exports = Detail;
