const sequelize = require('../utils/connections');
const DataTypes = require('sequelize');
const Repair = require('./Repair');

const Detail = sequelize.define( 'detail', {
    short_desc: {
        type : DataTypes.STRING,
        allownull: false
    },
    long_desc: {
        type : DataTypes.STRING,
    }
});

Detail.belongsTo(Repair);
Repair.hasMany(Detail);

module.exports = Detail;
