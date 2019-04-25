'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    UserId: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {}); 
  Transaction.addHook('afterUpdate', 'deleteStock', function (transaction, options) {
    if(options.sendMail){
      

    }
    
  })
  Transaction.associate = function(models) {
    // associations can be defined here
    Transaction.belongsTo(models.User, {foreignKey: 'UserId'})
    Transaction.hasMany(models.TransactionProduct, { foreignKey: 'TransactionId' })
  };
  return Transaction;
};