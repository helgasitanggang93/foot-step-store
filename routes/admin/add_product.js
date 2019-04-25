// const Router = require('express').Router()
// const Model = require('../../models')
// const multer = require('multer')

// const upload = multer({ dest: './public/products/' })

// Router.get('/', (req, res)=>{
//     // res.send(`sukses`)
//     res.render('./products/add_product.ejs')
// })
// Router.post('/', upload.single('myPicture'), (req, res, next)=>{
//     if (req.file){
//         console.log(req.file)
//         req.body.pic = req.file.filename
//     }
//     let input = req.body
//     console.log(input)
//     Model.Product.create({
//         name: input.name,
//         price: input.price,
//         description: input.description,
//         pic: input.pic,
//         size: input.size,
//         stock: input.stock,
//         createdAt: new Date(),
//         updatedAt: new Date()
//     })
//     .then(()=>{
//         res.send(`sukses`)
//         // res.render('./products/add_product.ejs')
//     })
//     .catch((err)=>{
//         res.send(err)
//     })
// })

// module.exports = Router



const Router = require('express').Router()
const Model = require('../../models')
const multer = require('multer')

const multerConf = {
    storage: multer.diskStorage({
    destination: function (req, file, next) {
      next(null, './public/products/shoes')
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

// const upload = multer({ dest: './public/products/' })

Router.get('/', (req, res)=>{
    // res.send(`sukses`)
    res.render('./products/add_product.ejs')
})
Router.post('/', multer(multerConf).single('picture'), (req, res)=>{
    if (req.file){
        console.log(req.file)
        req.body.pic = req.file.filename
    }
    // res.send(req.body)
    let input = req.body
    console.log(input)
    Model.Product.create({
        name: input.name,
        price: input.price,
        description: input.description,
        picture: input.pic,
        size: input.size,
        color: input.color,
        stock: input.stock,
        createdAt: new Date(),
        updatedAt: new Date()
    })
    .then(()=>{
        // res.send(`sukses`)
        res.render('./products/add_product.ejs')
    })
    .catch((err)=>{
        res.send(err)
    })
})

module.exports = Router