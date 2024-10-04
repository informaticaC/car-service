const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      unique: true,
        allowNull: false
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true
    },
    hidden: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }

   
});

User.prototype.toJSON = function () {
    const values = Object.assign({}, this.get());
    delete values.password;
    return values;
}

module.exports = User;