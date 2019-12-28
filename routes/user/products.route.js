const express = require('express');
//const categoryModel=require('../../models/category.model');
const productModel=require('../../models/product.model');
const userModel = require('../../models/user.model');
<<<<<<< HEAD
const restrict = require('../../middlewares/auth.mdw');
const router = express.Router();
=======
const roleSeller = require('../../middlewares/authSeller.mdw');
const router=express.Router();
>>>>>>> c8f56f0420eca6247869bd7ec179509da56989c1

//Thêm sửa xóa sản phẩm của chính seller đó

//Chưa có view myproducts hiện ra list sản phẩm của seller đó
<<<<<<< HEAD
router.get('/products', restrict, (req, res) => {
    if (req.session.role === 1) {
        alert('You must upgrade');
        return res.redirect('/');
    }

=======
router.get('/products',roleSeller, (req, res) => {
>>>>>>> c8f56f0420eca6247869bd7ec179509da56989c1
    res.render('vwUser/myproducts.hbs', {
        title: 'Your Products',
    });
})

//edit dữ liệu của database
<<<<<<< HEAD
router.get('/edit/:id', async (req, res) => {
    const rows = await productModel.getPro(req.params.id);
    if (rows.length === 0) {
        throw new Error('Invalid product id');
=======
// router.get('/edit/:id', async (req,res)=>{
//     const rows= await productModel.getPro(req.params.id);
//     if(rows.length === 0){
//         throw new Error('Invalid product id');
//     }
//     console.log(req.params.id);
//     res.render('vwUser/edit',{
//         product:rows[0]
//     });
// })

// router.post('/patch', async (req,res)=>{
//     const entity=req.body;
//     const results=await productModel.patch(entity);
//     console.log(results);
//     res.redirect('/');
// })

// router.post('/delete', async (req,res)=>{
//     const results=await productModel.del(req.body.ProID);
//     console.log(results.affectedRows);
//     res.redirect('/');
// })

//Thêm dữ liệu vào database
router.get('/add_product',(req,res)=>{
    res.render('vwUser/add-product');
})
>>>>>>> c8f56f0420eca6247869bd7ec179509da56989c1

    }
    console.log(req.params.id);
    res.render('vwUser/edit.hbs', {
        product: rows[0]
    });
})
router.post('/patch', async (req, res) => {
    const entity = req.body;
    const results = await productModel.patch(entity);
    console.log(results);
    res.redirect('/');
})
router.post('/delete', async (req, res) => {
    const results = await productModel.del(req.body.ProID);
    console.log(results.affectedRows);
    res.redirect('/');
})
//Thêm dữ liệu vào database
router.get('/add', (req, res) => {
    res.render('vwUser/add');
})
router.post('/add', async (req, res) => {
    // console.log(req.body);
    const entity = req.body;
    const results = await productModel.add(entity);
    console.log(results);
    res.render('vwUser/add');
    // res.end();
})

// router.get('/cart', (req, res) => {
//     res.render('vwadmin/cart.hbs', {
//         title: 'cart-admin',
//     });
// })

router.get('/err', (req, res) => {
    throw new Error('error occured');
})
module.exports = router;