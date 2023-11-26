const { DataTypes } = require('sequelize');
const sequelize = require('../config/connectdb');

const Product = sequelize.define('Product', {
  productName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.STRING, // Adjust the data type based on your requirements
    allowNull: false,
  },
  barcode: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = { Product };
