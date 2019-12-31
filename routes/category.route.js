const express = require('express');
//const categoryModel = require('../models/category.model');
const productModel=require('../models/product.model');
const router = express.Router();

router.get('/', async (req, res) => {
    //const categoryMobile = await categoryModel.allByList(1);
    //const categoryLaptop = await categoryModel.allByList(2);
    res.render('home',
        {
            categoryMobile, categoryLaptop,
        })
})

//Chi tiết sản phẩm
//UserID : ID của người vào xem sản phẩm
//SellerID: ID của người bán sản phẩm
//id: ID của sản phẩm
router.get('/product/:id',async (req, res) => {
    //Dữ liệu từ product 
    const product = await productModel.getPro(req.params.id);
    if (product.length === 0) {
        throw new Error('Invalid product id');
    }
    //Dũ liệu từ detail product
    const detailPro = await productModel.getDetailPro(req.params.id);
    if (detailPro.length === 0) {
        throw new Error('Invalid product id');
    }

    //Dữ liệu từ pro image
    const imgPro = await productModel.getImgPro(req.params.id);
    if (detailPro.length === 0) {
        throw new Error('Invalid product id');
    }
    
    console.log(product);
    console.log(detailPro);
    console.log(imgPro);
    res.render('vwDetailProduct/detail.hbs', {
        title: 'Detail Product',
    });
});

router.get('/detail/dellvostro3560', (req, res) => {
    const detail = details[0];
    res.render('vwDetailProduct/detail.hbs', {
        style: 'main.css',
        title: 'Product dell',
        detail,
    });
})

router.get('/detail/dellvostro3580', (req, res) => {
    const detail = details[1];
    res.render('vwDetailProduct/detail.hbs', {
        style: 'main.css',
        title: 'Product dell',
        detail,
    });
})

router.get('/:id/products', async (req, res) => {
    const list = await productModel.all(req.params.id);
    console.log(list);
    const namelist = "Products";
    res.render('prototype/listprototype.hbs', {
        title: 'List Product',
        list, namelist
    });
})
module.exports = router;