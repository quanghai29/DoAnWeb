const express=require('express');
const categoryModel=require('../../models/category.model');
const router=express.Router();

router.get('/demo',async (req,res)=>{
    const rows = await categoryModel.all();
    console.log(rows);
})

////////////////////
router.get('/home',(req,res)=>
{
    res.render('home.hbs',{
        title:'Home-admin',
    });
})

router.get('/cart', (req, res) => {
    res.render('vwadmin/cart.hbs', {
        title: 'cart-admin',
    });
})

router.get('/myprofile', (req, res) => {
    res.render('vwadmin/myprofile.hbs', {
        title: 'your profile',
    });
})

router.get('/myorders', (req, res) => {
    res.render('vwadmin/myorders.hbs', {
        title: 'your orders',
    });
})

router.get('/err',(req,res)=>{
    throw new Error('error occured');
})

module.exports = router;