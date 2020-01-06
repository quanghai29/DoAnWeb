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
router.post('/upgrade',roleBidder, async (req, res) => {
  const enity={
    f_ID: req.session.authUser.f_ID,
    f_UpgradeWaitStatus: 1
  }
  const rows= await userModel.patch(enity);
  res.render('vwUser/upgrade',{
    waitUpgrade: true
  });
});
router.get('/err',(req,res)=>{
    throw new Error('error occured');
})
module.exports = router;