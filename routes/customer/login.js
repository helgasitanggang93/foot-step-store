const Router = require('express').Router()
const Model = require('../../models')
const bcrypt = require('bcryptjs');

Router.get('/', (req, res)=>{
    res.render('./user/login.ejs')
})

Router.post('/', (req, res)=>{
    Model.User.findAll({
        where:{
            email: req.body.email
        }
    })
    .then((users)=>{
        // res.send(users)
        if(users.length === 0){
            throw new Error(`Username not found`)
        }else
        if (users.length >= 1){
            bcrypt.compare(`${req.body.psw}/\/`, users[0].dataValues.password)
            .then((success) => {
                if (success){
                    req.session.loginStatus = true
                    req.session.userName = req.body.email
                    req.session.role = users[0].dataValues.role                    
                    if (req.session.role === 'admin'){
                        res.redirect('/admin')
                    }else{
                        console.log(`masuk`)
                        res.redirect('/')                
                    }
                }else{
                    throw new Error(`Password wrong!`)        
                }
            })
            .catch((err)=>{
                res.send(`err : ${err}`)
            })   
        }
    })
    .catch((err)=>{
        res.send(`err : ${err}`)
    })
})

module.exports = Router