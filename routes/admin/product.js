const router = require('express').Router()
const {Product, Transaction, User, TransactionProduct} = require('../../models')

router.get('/:id', function (req, res) {
        Transaction.findAll({
            include : Product,
            where: {
                UserId: req.params.id
                
            }
        })
    .then(function (dataAll) {
        res.send(dataAll)
        
    })
    
})

module.exports = router