const express = require('express')
const app = express()
const PORT = 5000
const bodyParser = require('body-parser')
const session = require('express-session') 

const isLogin = require('./middlewares/isLogin')
const isAdmin = require('./middlewares/isAdmin')
let sess = { secret:'mySecret'}
app.locals.total = require('./helper/totalPrice')
app.use(session(sess))
app.use((req,res,next)=>{
    app.locals.session = req.session
    next()
})
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public')); 

app.use('/', require('./routes/customer/index'))
app.use('/login', require('./routes/customer/login'))
app.use('/logout', require('./routes/customer/logout'))
app.use('/signup', require('./routes/customer/signup'))
app.use('/admin', require('./routes/admin/admin'))


app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}...`)
})