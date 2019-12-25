const express=require('express');
//const productModel=require('../../models/product.model');
const userModel = require('../../models/user.model');
const roleSeller = require('../../middlewares/authSeller.mdw');
const roleBidder=require('../../middlewares/authBidder.mdw');
const router=express.Router();


//Chỉnh sửa lại profile có thể edit được

router.get('/myprofile',roleBidder, (req, res) => {
    res.render('vwUser/myprofile.hbs', {
        title: 'your profile',
    });
})

// edit được profile

router.get('/err',(req,res)=>{
    throw new Error('error occured');
})
module.exports = router;