const express = require('express');

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
        Chipset : "Bộ vi xử lý Intel Core™ i5 8265U (1.6Ghz, 6MB Cache)",
        Rom: "Bộ nhớ trong 4GB DDR4 2666MHz",
        GraphicCard: "VGA Nvidia Geforce MX130 2G DDR5",
        HardDriver: "Ổ cứng 1TB 5400rpm",
        Screen : "Màn hình 14.0” FHD(1920 * 1080), LED backlight",
        Security: "Bảo mật, công nghệ Finger Print"
    }
]

router.get('/dellvostro3560', (req, res) => {
    const detail =details[0];
    res.render('vwDetailProduct/detail.hbs', {
        style: 'main.css',
        title: 'Product dell',
        image: 'Dell/lap01.jpg',
        detail,
    });
})

var path = require('path');
path = path.join(__dirname, '../..', 'Contents');
router.use(express.static(path));
console.log(path);
module.exports = router;