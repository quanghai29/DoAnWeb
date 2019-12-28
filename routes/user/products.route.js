const express = require('express');
//const categoryModel=require('../../models/category.model');
const productModel=require('../../models/product.model');
const userModel = require('../../models/user.model');
const restrict = require('../../middlewares/auth.mdw');
const router = express.Router();

//Thêm sửa xóa sản phẩm của chính seller đó

//Chưa có view myproducts hiện ra list sản phẩm của seller đó
router.get('/products', restrict, (req, res) => {
    if (req.session.role === 1) {
        alert('You must upgrade');
        return res.redirect('/');
    }

    res.render('vwUser/myproducts.hbs', {
        title: 'Your Products',
    });
})

//edit dữ liệu của database
router.get('/edit/:id', async (req, res) => {
    const rows = await productModel.getPro(req.params.id);
    if (rows.length === 0) {
        throw new Error('Invalid product id');

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