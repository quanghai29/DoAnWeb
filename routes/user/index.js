const express = require('express');
const productModel=require('../../models/product.model');

const router = express.Router();

// Chi tiết sản phẩm
const details =
    [
        {
            Name: `Laptop Dell Vostro V5481A P92G001(i5 8265U / 4GB RAM / 1TB HDD / MX130 2G / 14" FHD/Win 10)`,
            Value0: `300.000đ`,// giá mua hiện tại
            Value1: `260.000đ`,// giá mua ngay
            Author: "Nguyễn Quang Hải",
            Buyer: "Đặng Văn Lâm",
            StartDate: "3 ngày trước",
            EndDate: "2 ngày sau",
            Vote: "4.6/5",
            Chipset: "Bộ vi xử lý Intel Core™ i5 8265U (1.6Ghz, 6MB Cache)",
            Rom: "Bộ nhớ trong 4GB DDR4 2666MHz",
            GraphicCard: "VGA Nvidia Geforce MX130 2G DDR5",
            HardDriver: "Ổ cứng 1TB 5400rpm",
            Screen: "Màn hình 14.0” FHD(1920 * 1080), LED backlight",
            Security: "Bảo mật, công nghệ Finger Print",
            image1: 'Dell/lap01.jpg',
            image2: 'Dell/lap02.jpg',
            image3: 'Dell/lap03.jpg'
        },
        {
            Name: `Laptop Dell Vostro 3580 P75F010 (i5 8265U/4GB RAM/1TB HDD/AMD Radeon 520 2GB/15.6" FHD/Win 10)`,
            Value0: `400.000đ`,// giá mua hiện tại
            Value1: `360.000đ`,// giá mua ngay
            Author: "Nguyễn Quang Hải",
            Buyer: "Nguyễn Công Phượng",
            StartDate: "2 ngày trước",
            EndDate: "4 ngày sau",
            Vote: "4.4/5",
            Chipset: "Intel Core i5-8265U (4 x 1.6GHz/6MB cache)",
            Rom: "Bộ nhớ trong 4GB DDR4 2666MHz",
            GraphicCard: "VGA Nvidia Geforce MX130 2G DDR5",
            HardDriver: "Ổ cứng 1TB 5400rpm",
            Screen: "Màn hình 14.0” FHD(1920 * 1080), LED backlight",
            Security: "Bảo mật, công nghệ Finger Print",
            image1: 'Dell/lap05.jpg',
            image2: 'Dell/lap06.jpg',
            image3: 'Dell/lap07.jpg'
        }
    ]

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


router.get('/list/samsung', async (req, res) => {
    //lấy list sản phẩm với Item = 1 (1 là ID của Item samsung)
    const list = await productModel.all(1);
    const namelist = "SamSung";
    res.render('prototype/listprototype.hbs', {
        title: 'List product SamSung',
        list, namelist
    });
})

router.get('/list/nokia', async (req, res) => {
    const list = await productModel.all(2);
    const namelist = "Nokia";
    res.render('prototype/listprototype.hbs', {
        title: 'List product Nokia',
        list, namelist
    });
})

router.get('/list/xiaomi', async (req, res) => {
    const list = await productModel.all(3);
    const namelist = "Xiaomi";
    res.render('prototype/listprototype.hbs', {
        title: 'List product Xiaomi',
        list, namelist
    });
})


router.get('/list/dell', async (req, res) => {
    const list = await productModel.all(4);
    //console.log(list);
    const namelist = "Dell";
    res.render('prototype/listprototype.hbs', {
        title: 'List product Dell',
        list, namelist
    });
})

router.get('/list/asua', async (req, res) => {
    const list = await productModel.all(5);
    const namelist = "Asua";
    res.render('prototype/listprototype.hbs', {
        title: 'List product Asua',
        list, namelist
    });
})

router.get('/list/apple', async (req, res) => {
    const list = await productModel.all(6);;
    const namelist = "Apple";
    res.render('prototype/listprototype.hbs', {
        title: 'List product Apple',
        list, namelist
    });
})

router.get('/list/lenovo', async (req, res) => {
    const list = await productModel.all(7);
    const namelist = "Lenovo";
    res.render('prototype/listprototype.hbs', {
        title: 'List product Lenovo',
        list, namelist
    });
})

router.get('/err',(req,res)=>{
    throw new Error('error occured');
})

module.exports = router;