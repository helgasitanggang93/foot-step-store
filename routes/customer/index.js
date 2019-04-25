const Router = require('express').Router()
const Model = require('../../models')


Router.get('/', (req, res)=>{
    Model.Product.findAll()
    .then((data)=>{
        let dataProducts = data.filter((d, i) => {
            return data.findIndex(e => e.name === d.name) === i
        })
        // res.send(dataProducts)
        res.render('./home/index.ejs' , {dataProducts:dataProducts})
        // res.render('./user/product.ejs',{dataProducts:dataProducts})
    })
    .catch(err=>{
        res.send(err)
    })

})

Router.get('/products', (req, res)=>{
    res.send(`out`)
})

Router.get('/product/detail/:id', (req, res)=>{
    Model.Product.findByPk(req.params.id)
    .then((dataProduct)=>{
        return Model.Product.findAll({
            where:{
                name:dataProduct.name
            }
        })
    })
    .then((detailProduct)=>{
        // res.send(detailProduct)
        res.render('./user/detail.ejs',{detailProduct:detailProduct})
    })
    .catch((err)=>{
        res.send(err)
    })
})

module.exports = Router