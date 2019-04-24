const express = require('express')
const app = express()
const port = 4000
const productRouter = require('./routes/product')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.set('view engine','ejs')
app.use('/product', productRouter)
app.listen(port, function () {
    console.log(`Listening port ${port}`)
    
})