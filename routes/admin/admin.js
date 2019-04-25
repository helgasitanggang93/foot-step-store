const router = require('express').Router()
const {User,Product, Transaction} = require('../../models')
const total = require('../../helper/totalAll')
const multer = require('multer')
const nodeMailer = require('nodemailer')

router.get('/', function (req, res) {
  User.findAll({
    include : Transaction,
     where : {
         role: 'customer'
     }
  })
  .then(function (data) {
    //   console.log(data[0].Transactions.length,"--------------")
        // res.send(data)
     res.render('./admin/index', {data})
  })
})

router.get('/dataPelanggan', function (req, res) {
    User.findAll({
        where: {
            role: 'customer'
        }
    })
    .then(function (data) {
        // res.send(data)
        res.render('./products/all_pelanggan', {data})
        
    })
    
})

router.get('/:id/detail', function (req, res) {
    Transaction.findOne({
        include: Product ,
        where: {
            status: 'paid',
            UserId : req.params.id
        }
    })
    .then(function (data) {
        // res.send(data)
        let hasil = total(data.Products)
        res.render('./admin/detailTransaction', {data: data, hasil : hasil, err: null})
        
    })
    .catch(function (err) {
        res.redirect(`/admin/${req.params.idUser}/detail`)
        
    })
    
})

router.get('/:idUser/send-email', function (req, res) {
    // res.send(req.params)
    let user = User.findAll({
        where : {
            id: req.params.idUser
        }
    })

   let transaction = Transaction.findOne({
        include : Product,
        where : {
            status: 'paid',
            UserId: req.params.idUser
        }
    }) 

    Promise.all([user, transaction])
    .then(function (dataUserTransaction) {
        let transporter = nodeMailer.createTransport({
            host: 'smtp.gmail.com',
            port : 587,
            secure : false,
            auth: {
                user: 'mkh5934@gmail.com',
                pass: 'helgaDevelopment@123'
            }
        });
        let mailOptions = {
            from: '"Foot Steep Admin" mkh5934@gmail.com', // sender address
            to: `${dataUserTransaction[0][0].email}`, // list of receivers
            subject: 'Foot Step Nota', // Subject line
            text: `terima kasih pak ${dataUserTransaction[0][0].name}`, // plain text body
            html: `<b>Terima Kasih Telah Belanja di Footstep kak ${dataUserTransaction[0][0].name} </b>` // html body
        };
        
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                res.redirect(`/admin`);
            }
            console.log('Message %s sent: %s', info.messageId, info.response);
            })
         Transaction.findOne({
                where: {
                    status: 'paid',
                    UserId : req.params.idUser
                }
            })
            .then(function (transaction) {
                transaction.status = 'done'
                return transaction.save({sendMail : true})
            })
            .then(function () {
                 res.redirect(`/admin`);  
            })  
    })
})

// const multerConf = {
//     storage: multer.diskStorage({
//     destination: function (req, file, next) {
//       next(null, './public/products')
//     },
//     filename: function (req, file, next) {
//         const ext = file.mimetype.split('/')[1]
//         next(null, file.fieldname + '-' + Date.now()+ '.'+ ext);
//     }
//   }),
//   fileFilter: function(req, file, next){
//       if (!file){
//           next();
//       }
//       const image = file.mimetype.startsWith('image/');
//       if (image){
//           next(null, true)
//       }
//       else{
//           next({message:"File type not supported"}, false)
//       }
//   }
// }

// const upload = multer({ dest: './public/products/' })

// router.get('/product', function (req, res) {
//     Product.findAll()
//     .then(function (data) {
//         let dataProduct = data.filter((d,i) => {
//             return data.findIndex(e => e.name === d.name) === i
//         })
//         res.render('./products/show_product', {data:dataProduct})
//     })
    
// })

// router.get('/product/:name/detail', function (req, res) {
  


  Product.findAll({
      where : {
          name : req.params.name
      }
  })
  .then(function (data) {
    //   res.send(data)
      res.render('./products/detailProduct', {data:data})
  })

    
// })

router.get('/product/:name/detail/:size', function (req, res) {
    // res.send(req.params)
    Product.destroy({where:req.params})
    .then(function () {
        res.redirect(`/admin/product/${req.params.name}/detail`)
        
    })
    .catch(function (err) {
        res.redirect('/admin')
        
    })
    
})

router.get('/product/:id/detailUpdate', function (req, res) {
    
    Product.findOne({
        where : {
            id : req.params.id
        }

    })
    .then(function (data) {
        // res.send(data)
        res.render('./products/edit_product', {data})
        
    })
    
})

router.post('/product/:id/detailUpdate', function (req, res) {
    
    let dataUpdate = req.body
    let id = req.params.id
    Product.update(dataUpdate, {where:{id:id}})
    .then(function () {
        res.redirect(`/admin/product`)
        
    })
    .catch(function (err) {
        res.redirect('/admin')
        
    })
    
})







// router.get('/product/addProduct', (req, res)=>{
//     res.render('./products/add_product.ejs')
// })
// router.post('/product/addProduct', multer(multerConf).single('pic'), (req, res)=>{
//     if (req.file){
//         console.log(req.file)
//         req.body.pic = req.file.filename
//     }
//     let input = req.body
//    res.send(input)
//     Product.create({
//         name: input.name,
//         price: input.price,
//         description: input.description,
//         picture: input.pic,
//         size: input.size,
//         stock: input.stock,
//         color:input.color,
//         createdAt: new Date(),
//         updatedAt: new Date()
//     })
//     .then(()=>{
//         res.render('./products/add_product.ejs')
//     })
//     .catch((err)=>{
//         res.send(err)
//     })
// })


module.exports = router