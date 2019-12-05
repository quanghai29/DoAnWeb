const express=require('express');
const router=express.Router();

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



module.exports = router;