const { DataTypes } = require('sequelize');
const sequelize = require('../config/connectdb');

const User = sequelize.define('user', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    trim: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    trim: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    trim: true,
  },
});

module.exports = { User };
