// Import important parts of the sequelize library
const { Model, DataTypes } = require('sequelize');

// Import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// Set up fields and rules for Product model
Product.init(
  {
    // Define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // Define product_name column
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Define price column
    price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
    // Define stock column
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true
      }
    },
    // Define category_id column
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "category",
        key: "id"
      }
    }
  },
  {
    sequelize, // Pass the Sequelize instance here
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;

