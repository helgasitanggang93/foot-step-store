const router = require('express').Router()
const {User,Product, Transaction} = require('../../models')

router.get('/', function(req, res) {
    let data1
    Transaction.findOne({
        include : Product,
        where : {
            UserId: 3
        }
    })
    .then(function (data) {
        for (let i = 0; i < data.Products.length; i++) {
            data.Products[i].stock -= data.Products[i].TransactionProduct.amount
            Product.update({
                stock : data.Products[i].stock
            }, {
                where : {
                    id : data.Products[i].id
                }
            })
               
        }
        res.send(data)
       
        
    })
   
    
})

module.exports = router