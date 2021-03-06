const Router = require('express').Router()
const Model = require('../../models')

Router.get('/', (req, res)=>{
    res.render('./user/signup.ejs')
})

Router.post('/', (req, res)=>{
    let input = req.body
    // res.send(req.body)
    if (input.psw === input.pswrepeat){
        // console.log(input.psw ,'===', input.pswrepeat)
        Model.User.cekEmail(input.email)
        .then((isUnique)=>{
            if (isUnique){
                Model.User.create({
                    email: input.email,
                    password: input.psw,
                    name: input.name,
                    gender: input.sex,
                    address:input.address,
                    phone: input.phone
                })
                .then(()=>{
                    // console.log(req.session)
                    res.redirect('/login')
                })
                .catch((err)=>{
                    res.send(` masuk sini ${err}`)
                })            
            }else{
                throw new Error(`Email already registered`)
            }
        })
        .catch((err)=>{
            res.send(`err : ${err}`)
        })    
    }else{
        res.send(`password tidak sama`)
    }
})

module.exports = Router