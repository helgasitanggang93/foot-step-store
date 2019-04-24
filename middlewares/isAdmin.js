function isAdmin (req,res,next){
    console.log(res.session)

    if(req.session.role === 'admin'){
        next()
        console.log(`masuk`)
    }else
    {
        console.log(`out`)
        res.redirect(`./login?error=please login as admin`)
    }
}

module.exports = isAdmin