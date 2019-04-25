function isLogin (req,res,next){
    console.log(req.session,"================")
    if(req.session.loginStatus === false || req.session.loginStatus === undefined ){
        res.redirect('/login')
        // console.log(`salah`)
    }else
    {
        next()
        // console.log(`masuk`)
    }
}

module.exports = isLogin