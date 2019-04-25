const router = require('express').Router()
const {User,Product, Transaction} = require('../../models')
const total = require('../../helper/totalAll')
const multer = require('multer')

router.get('/', function (req, res) {
  User.findAll({
     where : {
         role: 'customer'
     }
  })
  .then(function (data) {
     res.render('./admin/index', {data})
      
  })
})

router.get('/:id/detail', function (req, res) {
    Transaction.findOne({
        include: Product ,
        where: {
            status: 'pending',
            UserId : req.params.id
        }
    })
    .then(function (data) {
        // res.send(data)
        let hasil = total(data.Products)
        res.render('./admin/detailTransaction', {data: data, hasil : hasil})
        
    })
    
})

const multerConf = {
    storage: multer.diskStorage({
    destination: function (req, file, next) {
      next(null, './public/products')
    },
    filename: function (req, file, next) {
        const ext = file.mimetype.split('/')[1]
        next(null, file.fieldname + '-' + Date.now()+ '.'+ ext);
    }
  }),
  fileFilter: function(req, file, next){
      if (!file){
          next();
      }
      const image = file.mimetype.startsWith('image/');
      if (image){
          next(null, true)
      }
      else{
          next({message:"File type not supported"}, false)
      }
  }
}

const upload = multer({ dest: './public/products/' })

router.get('/product/addProduct', (req, res)=>{
    res.render('./products/add_product.ejs')
})
router.post('/product/addProduct', multer(multerConf).single('pic'), (req, res)=>{
    if (req.file){
        console.log(req.file)
        req.body.pic = req.file.filename
    }
    let input = req.body
    console.log(input)
    Model.Product.create({
        name: input.name,
        price: input.price,
        description: input.description,
        pic: input.pic,
        size: input.size,
        stock: input.stock,
        createdAt: new Date(),
        updatedAt: new Date()
    })
    .then(()=>{
        res.render('./products/add_product.ejs')
    })
    .catch((err)=>{
        res.send(err)
    })
})


module.exports = router