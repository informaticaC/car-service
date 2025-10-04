const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connections'); // Adjust path as needed

const Vehicle = sequelize.define('vehicle', {
    make: {
        type: DataTypes.STRING,
        allowNull: false,
        trim: true
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false,
        trim: true
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1886
        }
    },
    // vin: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    //     unique: true,
    //     trim: true
    // },
    licensePlate: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        trim: true
    },
    
    
    mileage: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    color: {
        type: DataTypes.STRING,
        trim: true
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'Vehicles',
    timestamps: true // Set to true if you want Sequelize to manage createdAt/updatedAt
});

module.exports = Vehicle;