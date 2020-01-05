const express = require('express');
//const categoryModel = require('../models/category.model');
const productModel=require('../models/product.model');
const userModel= require('../models/user.model');
const router = express.Router();
const moment = require('moment');//formart thời gian
const numeral = require('numeral');
router.get('/', async (req, res) => {
    //const categoryMobile = await categoryModel.allByList(1);
    //const categoryLaptop = await categoryModel.allByList(2);
    res.render('home',
        {
            categoryMobile, categoryLaptop,
        })
})

//Chi tiết sản phẩm
router.get('/product/:id',async (req, res) => {
    //Dữ liệu từ product =====================================================
    const product = await productModel.getPro(req.params.id);
    if (product.length === 0) {
        throw new Error('Invalid product id');
    }
    //Dũ liệu từ detail product =============================================
    const detailPro = await productModel.getDetailPro(req.params.id);
    if (detailPro.length === 0) {
        throw new Error('Invalid product id');
    }

    //Dữ liệu từ pro image ===================================================
    const imgPro = await productModel.getImgPro(req.params.id);
    var countImg=imgPro.length;
    if (countImg === 0) {
        throw new Error('Invalid product id');
    }
    console.log(product);
    //Dữ liệu của người đang giữ giá trước đó ================================
    var BestPricePrevious = null;
    const rowsBestPrice = await productModel.getBestPricePrevious(req.params.id);
    if(rowsBestPrice.length !== 0)
    {
        BestPricePrevious = rowsBestPrice[0];
        const rowUserName = await userModel.getUsername(BestPricePrevious.Bidder);

        //console.log(rowUserName);
        BestPricePrevious.UsernameBidder = rowUserName[0].f_Username;
    }

   
    //Dữ liệu đấu giá của chính bidder đang đăng nhập (nếu có)===============================
    var historyOfferBidder=null;
    var rowhisOfferBidder = null;
    if(req.session.isAuthenticated === true)
    {
        rowhisOfferBidder = await productModel.getOfferBidder(req.params.id, req.session.authUser.f_ID);
        if(rowhisOfferBidder !==0)
        {
            historyOfferBidder = rowhisOfferBidder[0];
        }
       
    }


    //Xử lý thời gian ====================
    product[0].TimeEnd = moment(product[0].TimeEnd,'YYYY-MM-DDTHH:mm:ss.SSSZ').format('YYYY-MM-DD HH:mm:ss');

    //console.log(product);
    //console.log(detailPro);
    //console.log(imgPro);

    res.render('vwDetailProduct/detail.hbs', {
        title: 'Detail Product',
        product: product[0],
        BestPricePrevious,
        historyOfferBidder,
        detailPro,
        mainImgPro: imgPro[0],
        imgPro: imgPro,
        countImg,
    });
});

//Update thời gian kết thúc
router.post('/product/updateTimeEnd/:id',async (req, res) => {
    console.log(req.body.newTimeEnd);
    var entity={
        ProID: req.params.id,
        TimeEnd: req.body.newTimeEnd
    };
    const results = await productModel.patch(entity);
    console.log(results);
    
    //quay lại trang đang xem chi tiết sản phẩm
    res.redirect(`/categories/product/${req.params.id}`);
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