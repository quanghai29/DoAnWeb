const express = require('express');
//const categoryModel = require('../models/category.model');
const productModel=require('../models/product.model');
const userModel= require('../models/user.model');
const router = express.Router();
const moment = require('moment');//formart thời gian
const numeral = require('numeral');
const config = require('../config/default.json');
var cron = require('node-cron');//Hệ thống kiểm tra định kỳ 

router.get('/', async (req, res) => {
    //const categoryMobile = await categoryModel.allByList(1);
    //const categoryLaptop = await categoryModel.allByList(2);
    res.render('home',{
        categoryMobile, categoryLaptop,
    })
})



//Cập nhật lại trạng thái sản phẩm 
cron.schedule('*/30 * * * * *', async () => {
    //Tìm những sản phẩm đang sell và đã được chấp nhận sell từ admin
    const rowsProduct = await productModel.getSellingProduct();
    const count =rowsProduct.length;

    for(var i=0 ; i < count ;i++)
    {
        //kiểm tra hết hạn chưa
        var timeEnd = rowsProduct[i].TimeEnd;
        if(moment().isAfter(timeEnd)===true)
        {
            const entity=
            {
                ProID: rowsProduct[i].ProID,
                StatusID: 1
            }
            //cập nhật lại trạng thái sản phẩm
            const rowsUpdate= productModel.updateStatusPro(entity);
        }
    }
});

//Chi tiết sản phẩm
router.get('/product/:id',async (req, res) => {
    
    //Dữ liệu từ product =====================================================
    const product = await productModel.getPro(req.params.id);
    if (product.length === 0) {
        throw new Error('Invalid product id');
    }

    //Dũ liệu từ detail product =============================================
    const detailPro = await productModel.getAceptedDetailPro(req.params.id);
    console.log(detailPro);

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

    //Lịch sử đấu giá
    var historyOffer= await productModel.getHisProduct(req.params.id);

    //Xử lý thời gian ====================

    product[0].TimeEnd = moment(product[0].TimeEnd,'YYYY-MM-DDTHH:mm:ss.SSSZ').format('YYYY-MM-DD HH:mm:ss');
    console.log(product);

    // Những sản phẩm liên quan
    var relaveProduct = await productModel.getListItem(product[0].Item);
    for(var i=0;i<relaveProduct.length;i++)
    {
        relaveProduct[i].TimeEnd=moment(relaveProduct[i].TimeEnd,'YYYY-MM-DDTHH:mm:ss.SSSZ').format('YYYY-MM-DD HH:mm:ss');
    }

    console.log(relaveProduct);
    //console.log(product);
    //console.log(detailPro);
    //console.log(imgPro);

    res.render('vwDetailProduct/detail.hbs', {
        title: 'Detail Product',
        product: product[0],
        BestPricePrevious,
        historyOfferBidder,
        historyOffer,
        detailPro,
        mainImgPro: imgPro[0],
        imgPro: imgPro,
        countImg,
        relaveProduct
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

    for (const c of res.locals.lcCategories) {
        if (c.ItemID === +req.params.id) {
            c.isActive = true;
        }
    }

    const limit = config.paginate.limit;
    const itemId = req.params.id;
    const page = req.query.page || 1;
    if (page < 1) page = 1;
    const offset = (page - 1) * limit;

    const [total, rows] = await Promise.all([
        productModel.countByCat(itemId),
        productModel.pageByCat(itemId, offset)
    ])

    let nPages = Math.floor(total / limit);
    if (total % limit > 0) nPages++;
    const page_numbers = [];
    for (i = 1; i <= nPages; i++) {
        page_numbers.push({
            value: i,
            isCurrentPage: i === +page
        })
    }

    for(var i=0;i<rows.length;i++)
    {
        rows[i].TimeEnd=moment(rows[i].TimeEnd,'YYYY-MM-DDTHH:mm:ss.SSSZ').format('YYYY-MM-DD HH:mm:ss');
    }
    const prev_value = page == 1 ? 1 : +page - 1;
    const next_value = page == nPages ? nPages : +page + 1;
    console.log(rows);
    res.render('prototype/listprototype.hbs', {
        products: rows,
        empty: rows.length === 0,
        page_numbers,
        prev_value, next_value
    });
})


// router.get('/:id/products', async (req, res) => {
//     const list = await productModel.all(req.params.id);
//     console.log(list);
//     const namelist = "Products";
//     res.render('prototype/listprototype.hbs', {
//         title: 'List Product',
//         list, namelist
//     });
// })

module.exports = router;