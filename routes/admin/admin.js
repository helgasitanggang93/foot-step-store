const router = require('express').Router()
const {User,Product} = require('../../models')

router.get('/', function (req, res) {
    res.render('./admin/index.ejs')
})


module.exports = router