const express=require('express');
//const categoryModel=require('../../models/category.model');
//const productModel=require('../../models/product.model');
const userModel = require('../../models/user.model');
const roleSeller = require('../../middlewares/authSeller.mdw');
const roleBidder=require('../../middlewares/authBidder.mdw');
const router=express.Router();


router.get('/upgrade',roleBidder, async (req, res) => {
    res.render('vwUser/upgrade',{
    });
  });

router.get('/err',(req,res)=>{
    throw new Error('error occured');
})
module.exports = router;