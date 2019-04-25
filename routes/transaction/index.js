const Router = require('express').Router()
const Model = require('../../models')

Router.get('/buy/:productId', (req, res)=>{
    console.log(req.session.idUser,"===")
    Model.User.findOne({
        where:{
            email: req.session.userName
        }
    })
    .then((dataCust)=>{
        // console.log(dataCust.id)
        Model.Transaction.create({
            UserId:dataCust.id
        })
        .then(()=>{
            // res.send('sukses')
            return Model.Transaction.findOne({
                where:{
                    UserId:dataCust.id,
                    status:'onCart'
                }
            })  
        })
        .then((dataTransaction)=>{
            Model.Product.findOne({
                where:{
                    id:req.params.productId
                }
            })
            .then((dataName)=>{
                return Model.Product.findAll({
                    where:{
                        name:dataName.name,
                        size:req.query.size
                    }
                })
            })
            .then((dataSize)=>{
                return Model.TransactionProduct.create({
                    TransactionId: dataTransaction.id,
                    ProductId: dataSize[0].id,
                    amount:1
                })
            })
            .then(()=>{
                res.redirect(`/transaction/cart/${req.session.idUser}`)
            })
            .catch((err)=>{
                res.send(err)
            })
        })
        .catch((err)=>{
            res.send(err)
        })
    })
    .catch((err)=>{
        res.send(err)
    })
})

Router.get('/cart/:userId', (req, res)=>{
    Model.Transaction.findOne({
        include:[
            {model:Model.TransactionProduct},
            {model:Model.Product}
        ],
        where:{
            UserId:req.params.userId
        }
    })
    .then((cartUser)=>{
        // console.log(cartUser.TransactionProducts.length," ------")
        // res.send(cartUser)
        res.render('./user/cart.ejs', {cartUser:cartUser})
    })
    .catch((err)=>{
        res.send(err)
    })
})

Router.get('/cart/:userId/delete/:transactionId/:productId', (req, res)=>{
    Model.TransactionProduct.destroy({
        where:{
            TransactionId:req.params.transactionId,
            ProductId:req.params.productId
        }
    })
    .then(()=>{
        res.redirect(`/transaction/cart/${req.params.userId}`)
    })
    .catch((err)=>{
        res.send(err)
    })
})

Router.get('/pay/:transactionId/:userId', (req, res)=>{
    Model.Transaction.update({
        status:'paid'},{
        where:{
            id:req.params.transactionId
        }
    })
    .then(()=>{
            // res.send(dataUser)
            Model.Transaction.findOne({
                include : [{model:Model.Product}],
                where : {
                    UserId: req.params.userId
                    // id:req.params.transactionId
                }
            })
            .then(function (data) {
                res.send(data)
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
        })
        .catch((err)=>{
            res.send(err)
        })    
    })
    .catch((err)=>{
        res.send(err)
    })
})


module.exports = Router