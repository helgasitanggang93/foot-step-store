const Router = require('express').Router()
const Model = require('../../models')
const nodeMailer = require('nodemailer')


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
        console.log(cartUser," ------")
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
            let transporter = nodeMailer.createTransport({
                host: 'smtp.gmail.com',
                port : 587,
                secure : false,
                auth: {
                    user: 'mkh5934@gmail.com',
                    pass: 'helgaDevelopment@123'
                }
            });
            let mailOptions = {
                from: '"Foot Steep Admin" mkh5934@gmail.com', // sender address
                to: `mkh5934@gmail.com`, // list of receivers
                subject: 'Foot Step Nota', // Subject line
                text: ` `, // plain text body
                html: `<b>You have new order </b>` // html body
            };
            
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    res.redirect(`/admin`);
                }
                console.log('Message %s sent: %s', info.messageId, info.response);
                })
                res.render('./user/paid.ejs')
            // Model.Transaction.findOne({
            //     include : [{model:Model.Product}],
            //     where : {
            //         UserId: req.params.userId
            //         // id:req.params.transactionId
            //     }
            // })
            // .then(function (data) {
            //     res.send(data)
            //     for (let i = 0; i < data.Products.length; i++) {
            //         data.Products[i].stock -= data.Products[i].TransactionProduct.amount
            //         Product.update({
            //             stock : data.Products[i].stock
            //         }, {
            //             where : {
            //                 id : data.Products[i].id
            //             }
            //         })
            //     }
            // })
            // .catch((err)=>{
            //     res.send(err)
            // })    
    })
    .catch((err)=>{
        res.send(err)
    })
})


module.exports = Router