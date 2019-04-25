const Router = require('express').Router()
const Model = require('../../models')

Router.get('/', (req, res)=>{
    res.render('./home/index.ejs')
})

Router.get('/products', (req, res)=>{
    // res.send('masuk')
//     Model.Product.findAll()
//     .then((dataProducts)=>{
//         res.send(dataProducts)
//     })
//     .catch(err=>{
//         res.send(err)
//     })
//     res.render('./home/index.ejs')
})
module.exports = Router