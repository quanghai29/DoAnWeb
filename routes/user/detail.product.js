const express= require('express');

const router= express.Router();


const detail =
[
 {
    Name: `Laptop Dell Vostro V5481A P92G001(i5 8265U / 4GB RAM / 1TB HDD / MX130 2G / 14" FHD/Win 10)`,
    Value0: `300.000đ`,// giá mua hiện tại
    Value1: `260.000đ`,// giá mua ngay
    Author: "Nguyễn Quang Hải",
    Vote: "4.6/5"
 }
];

router.get('/dell', (req,res)=>{
    const mydetail=detail[0];
    res.render('vwDetailProduct/detail.hbs',{
        style: 'main.css',
        title: 'Product dell',
        image:'Dell/lap01.jpg',
        mydetail
    });
})

var path=require('path');
path= path.join(__dirname,'../..','Contents');
router.use(express.static(path));

module.exports=router;