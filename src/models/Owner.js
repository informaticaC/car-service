const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connections'); // Adjust path as needed

const Owner = sequelize.define('Owner', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isEmail: true
        }
    }
}, {
    tableName: 'owners',
    timestamps: true
});

module.exports = Owner;