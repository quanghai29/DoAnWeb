const express=require('express');
const categoryModel=require('../../models/category.model');
const productModel=require('../../models/product.model');
const router=express.Router();

//edit dữ liệu của database
router.get('/edit/:id', async (req,res)=>{
    const rows= await productModel.getPro(req.params.id);
    if(rows.length === 0){
        throw new Error('Invalid product id');
        
    }
    console.log(req.params.id);
    res.render('vwadmin/edit',{
        product:rows[0]
    });
})

router.post('/patch', async (req,res)=>{
    const entity=req.body;
    const results=await productModel.patch(entity);
    console.log(results);
    res.redirect('/user/list/dell');
})

router.post('/delete', async (req,res)=>{
    const results=await productModel.del(req.body.ProID);
    console.log(results.affectedRows);
    res.redirect('/user/list/dell');
})

//Thêm dữ liệu vào database
router.get('/add',(req,res)=>{
    res.render('vwadmin/add');
})

router.post('/add', async (req,res)=>{
    // console.log(req.body);
    const entity=req.body;
    const results=await productModel.add(entity);
    console.log(results);
    res.render('vwadmin/add');
    // res.end();
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