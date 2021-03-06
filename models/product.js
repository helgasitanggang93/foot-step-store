'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    size: DataTypes.INTEGER,
    color: DataTypes.STRING,
    stock:DataTypes.INTEGER,
    picture: DataTypes.STRING
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
    Product.hasMany(models.TransactionProduct, {foreignKey: 'ProductId'})
  };
  return Product;
};