'use strict';
module.exports = (sequelize, DataTypes) => {
  const TransactionProduct = sequelize.define('TransactionProduct', {
    TransactionId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER,
    amount : DataTypes.INTEGER
  }, {});
  TransactionProduct.associate = function(models) {
    // associations can be defined here
    models.Transaction.belongsToMany(models.Product,{through: 'TransactionProduct', foreignKey:'TransactionId'})
    models.Product.belongsToMany(models.Transaction,{through: 'TransactionProduct', foreignKey:'ProductId'})
  };
  return TransactionProduct;
};