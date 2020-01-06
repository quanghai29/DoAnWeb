const express = require('express');
//const categoryModel=require('../../models/category.model');
const productModel=require('../../models/product.model');
//const userModel = require('../../models/user.model');
const roleSeller=require('../../middlewares/authSeller.mdw');
const router = express.Router();
const numeral = require('numeral');//formart number
const multer = require('multer');//store ảnh
const uuidv1 = require('uuid/v1');// phát sinh bộ tên unique
const moment = require('moment');//formart thời gian
var fs = require('fs');//tạo thư mục

//Hiển thị sản phẩm trong mục My Products
router.get('/products', async(req, res) => {
    const rowsSelling=await productModel.getProStatus(0);
    const rowsSold=await productModel.getProStatus(1);
    res.render('vwUser/myproducts.hbs', {
        title: 'Your Products',
        emptySelling: rowsSelling.length===0,
        emptySold: rowsSold.length===0,
        ProductsSelling: rowsSelling,
        ProductsSold: rowsSold,
    });
})

//add product
router.get('/add_product', (req, res) => {
    res.render('vwUser/add-product.hbs', {
        title: 'Your Products',
    });
})

//Nhận dữ liệu thêm từ user
router.post('/add_product', async (req, res) => {

    const doe = moment(req.body.DOE,'DD-MM-YYYY HH:mm').format('YYYY-MM-DD HH:mm');
    console.log("DOE : "+ doe);
    //Dữ liệu nhận được
    const entity = req.body;

    //Chuyển lại định dạng của số
    entity.PriceBegin = numeral(entity.PriceBegin).value();
    entity.PriceStep = numeral(entity.PriceStep).value();
    entity.PriBuyNow = numeral(entity.PriBuyNow).value();
    entity.TimeBegin = moment().format('YYYY-MM-DD HH:mm:ss');
    entity.SellerID= req.session.authUser.f_ID;//ID của seller đang đăng nhập
    entity.StatusAcceptFromAdmin = 1; //default là chưa được admin accept

    console.log(entity.SellerID);
    console.log('time begin: ' + entity.TimeBegin);
    entity.TimeEnd = doe;
    const des=entity.Description;
    delete entity.Description;
    delete entity.DOE;
    //thêm vào bảng product
    const results = await productModel.add(entity);

    console.log('add product' + results.TimeEnd);
    //Dữ liệu cho bảng Detail Product
    var entityDetail= {
        ProID : results.insertId,
        Description: des,
        DateWrite : entity.TimeBegin,
        Modify: 0 //default là được admin accept
    };

    //thêm vào detail product
    const resultsDetail = await productModel.addDetailProduct(entityDetail);

    console.log('add detail product\n' + resultsDetail);
    res.redirect(`/user/upload_image/${results.insertId}`);
})

//Upload image
router.get('/upload_image/:id',(req, res) => {

    /*CHƯA TEST ĐIỀU KIỆN  --------------------------------------------------*/

    // KIỂM TRA ID ĐÃ CÓ TRONG BẢNG PRODUCT CHƯA NẾU CHƯA THÔNG BÁO CHO NGƯỜI DÙNG BIẾT 
    //TRÁNH TRƯỜNG HỢP NHẢY VÀO THÊM ẢNH BẤT HỢP PHÁP

    res.render('vwUser/upload-image', {
        title: 'Upload Image Your Products',
    });
});

const storage =  multer.diskStorage({
    filename: async function (req, files, cb) {
        //Tạo tên duy nhất
        var filename = uuidv1() + '.png';

        //lấy id sản phẩm
        var id = req.params.id;

        //Thêm dữ liệu tên ảnh vào csdl
        var entityImageProduct= {
            ProID : id,
            imgURL: filename,
        };

         //thêm vào  proimage
        const resultsImageProduct = await productModel.addImageProduct(entityImageProduct);
        console.log(resultsImageProduct);

        cb(null, filename);
    },
    destination: function (req, file, cb) {
      //Lấy mã sản phẩm trên đường dẫn
      var id = req.params.id;
      //tạo folder cho image
      var dir = `./Contents/Images/${id}/`;
      if (!fs.existsSync(dir)){
          fs.mkdirSync(dir);
      }
      cb(null, dir);
    },
  });
const upload = multer({ storage });

router.post('/upload_image/:id', function (req, res) {

    /************************* -****************/
    //Check id có tồn tại hay không
    /***************************************** */
    upload.array('Extra[]',1000)(req, res, err => {
      if (err) { }
      res.render('vwUser/upload-image', {
        title: 'Upload Image Your Products',
        complete:true
        });
    });
})

//---Đấu Giá Bằng Tay
router.post('/product/PlaceBid/:id',async (req, res) => {

    //Nếu đã có dữ liệu đấu giá rồi thì load lên lịch sử đấu giá của người đang đăng nhập
    var hisOfferBidder = await productModel.getOfferBidder(req.params.id,req.session.authUser.f_ID);

    var newPlaceBid= numeral(req.body.PlaceBid).value();//giá đặt của người ra giá
    var StatusCurrentWinner = 0;//Trạng thái đấu giá của người đang đấu giá

    //Người đang giữ giá cao nhất trước đó
    var BestPricePrevious = await productModel.getBestPricePrevious(req.params.id);
    var ProductPrice = await productModel.getProductPrice(req.params.id);

    console.log(BestPricePrevious);
    console.log(ProductPrice);

    //Nếu đã có người ra giá trước đó
    if(BestPricePrevious.length !== 0)
    {
        console.log("length #0");
        
        var BestPrice =  BestPricePrevious[0].PricePlaceBid;//Gía đang giữ
        var Step =  ProductPrice[0].PriceStep;//Bước giá

        console.log(newPlaceBid);
        console.log(BestPrice);
        console.log(Step);

        //Nếu giá đặt sau cao hơn giá đang giữ công với bước giá
        if(newPlaceBid >= (BestPrice + Step))
        {
            console.log("Update status");
            //Cập nhật lại trạng thái giữ giá của người đang ra giá
            StatusCurrentWinner=1;

            // Cập nhật lại trạng thái giữ giá của người đã giữ giá trước đó
            const entityStatusWinner = {
                ProID: req.params.id,
                Bidder: BestPricePrevious[0].Bidder,
                StatusWinner : 0
            };

            console.log(entityStatusWinner);
            const UpdateStatusWinner = await productModel.updateStatusWinner(entityStatusWinner);
        }
        else{//Nếu Người đặt không có giá cao hơn người đang giữ thì không lưu vào csdl
            res.redirect(`/categories/product/${req.params.id}`);
        }
    }
    else{
        //Nếu chưa có người ra giá thì cập nhật trạng thái giữ giá của ngươi đang ra giá
        StatusCurrentWinner=1;
    }

   
    //Nếu chưa có ai ra giá thì so sáng với giá khởi didemr  //xử lý ở client

    //Nếu người thắng cuộc là người đã đáu giá trước đó thì 

    //Thêm vào model ra giá sản phẩm
    var entity={
        ProID: req.params.id,
        Bidder: req.session.authUser.f_ID,
        PricePlaceBid: newPlaceBid,
        TimePlace: moment().format('YYYY-MM-DD HH:mm:ss'),
        StatusWinner: StatusCurrentWinner
    };
    console.log(entity);
    
    //nếu chưa có lịch sử đấu giá của người đăng nhập 
    if(hisOfferBidder.length ===0)
    {
        //Insert
        const resultsInsert = await productModel.addOfferProduct(entity);
    }
    else//ngược lại chỉ cần update
    {
        const resultsUpdate = await productModel.updateStatusWinner(entity);
    }

    //quay lại trang đang xem chi tiết sản phẩm
    res.redirect(`/categories/product/${req.params.id}`);
})


//Đấu Gía tự động
router.post('/product/autoPlaceBid/:id',async (req, res) => {

     //Nếu đã có dữ liệu đấu giá rồi thì load lên lịch sử đấu giá của người đang đăng nhập
    var hisOfferBidder = await productModel.getOfferBidder(req.params.id,req.session.authUser.f_ID);
    console.log(hisOfferBidder);
    if(hisOfferBidder.length !== 0)
    {
         //nếu vẫn đang là người thắng cuộc thì không làm gì cả
        if(hisOfferBidder[0].StatusWinner===1)
        {
            return res.redirect(`/categories/product/${req.params.id}`);
        }
    }

    var StatusCurrentWinner = 0;//Trạng thái giữ giá của người đang đăng nhập
    var newPlaceBid = null ;//giá đặt của hệ thống 
    var maxBid=numeral(req.body.MaxBidLabel).value();//giá cao nhất mà Bidder có thể trả

    console.log(maxBid);
    //Người đang giữ giá cao nhất trước đó
    var BestPricePrevious = await productModel.getBestPricePrevious(req.params.id);
    var ProductPrice = await productModel.getProductPrice(req.params.id);

    console.log(BestPricePrevious);
    console.log(ProductPrice);
    

    //Nếu đã có người ra giá trước đó
    if(BestPricePrevious.length !== 0)
    {
        
        var BestPrice =  BestPricePrevious[0].PricePlaceBid;//Gía đang giữ
        var Step =  ProductPrice[0].PriceStep;//Bước giá

        console.log(newPlaceBid);
        console.log(BestPrice);
        console.log(Step);

        //Nếu giá max cao hơn so với giá đang giũ + bước giá
        if(maxBid >= (BestPrice + Step))
        {
            //Đặt lại giá vừa đủ để thắng
            newPlaceBid=BestPrice + Step;
            console.log("Update status");
            //Cập nhật lại trạng thái giữ giá của người đang đăng nhập
            StatusCurrentWinner=1;

            // Cập nhật lại trạng thái giữ giá của người đã giữ giá trước đó
            const entityStatusWinner = {
                ProID: req.params.id,
                Bidder: BestPricePrevious[0].Bidder,
                StatusWinner : 0
            };
            console.log(entityStatusWinner);
            const UpdateStatusWinner = await productModel.updateStatusWinner(entityStatusWinner);

        }
        else{//nếu giá max không cao hơn thì không lưu vào csdl
            //cho giá max, giá đặt về null, StatusCurrentWinner = 0
            maxBid=null;
            newPlaceBid=null;
            StatusCurrentWinner=0;
        }
    }
    else{
        //Nếu chưa có người ra giá 
        //Đặt lại giá vừa đủ (giá khởi điểm +  bước giá)
        newPlaceBid = ProductPrice[0].PriceBegin + ProductPrice[0].PriceStep;

        //Đặt trạng thái giữ giá
        StatusCurrentWinner=1;
    }

    
    var entity={
        ProID: req.params.id,
        Bidder: req.session.authUser.f_ID,
        PricePlaceBid: newPlaceBid,
        MaxBid: maxBid,
        TimePlace: moment().format('YYYY-MM-DD HH:mm:ss'),
        StatusWinner: StatusCurrentWinner
    };
    console.log(entity);

    //nếu chưa có lịch sử đấu giá của người đăng nhập 
    if(hisOfferBidder.length ===0)
    {
        //Insert
        const resultsInsert = await productModel.addOfferProduct(entity);
    }
    else//ngược lại chỉ cần update
    {
        const resultsUpdate = await productModel.updateStatusWinner(entity);
    }
    //res.send('ok');
    res.redirect(`/categories/product/${req.params.id}`);
})

router.post('/product/offAutoPlaceBid/:id',async (req, res) => {
    var entity={
        ProID: req.params.id,
        Bidder: req.session.authUser.f_ID,
        MaxBid: null,
        TimePlace: moment().format('YYYY-MM-DD HH:mm:ss')
    };
    console.log(entity);
    const resultsUpdate = await productModel.updateStatusWinner(entity);
})
// //edit dữ liệu của database
// router.get('/edit/:id', async (req, res) => {
//     const rows = await productModel.getPro(req.params.id);
//     if (rows.length === 0) {
//         throw new Error('Invalid product id');

//     }
//     console.log(req.params.id);
//     res.render('vwUser/edit.hbs', {
//         product: rows[0]
//     });
// })
// router.post('/patch', async (req, res) => {
//     const entity = req.body;
//     const results = await productModel.patch(entity);
//     console.log(results);
//     res.redirect('/');
// })
// router.post('/delete', async (req, res) => {
//     const results = await productModel.del(req.body.ProID);
//     console.log(results.affectedRows);
//     res.redirect('/');
// })


// router.get('/cart', (req, res) => {
//     res.render('vwadmin/cart.hbs', {
//         title: 'cart-admin',
//     });
// })

router.get('/err', (req, res) => {
    throw new Error('error occured');
})
module.exports = router;