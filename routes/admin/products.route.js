const express = require('express');
const productModel = require('../../models/product.model');
const config = require('../../config/default.json');
const roleAdmin = require('../../middlewares/authAdmin.mdw');
const router = express.Router();

router.get('/editproducts',roleAdmin, async (req, res) => {
    const rows = await productModel.getProEdit();
    res.render('vwDetailProduct/admin_edit_pro', {
        layout: 'admin.hbs',
        title: 'Accept products of Users',
        products: rows,
        empty: rows.length === 0
    });
})

router.get('/edit/:id/:modi',roleAdmin, async (req, res) => {
    const rows = await productModel.getProByID(req.params.id);
    const details= await productModel.getDetailByID(req.params.id);
    const changes=await productModel.getModifyByID(req.params.modi);
    var auto = 'Không';
    if(rows[0].AutoReset == 1){
        auto='Có';
    }
    res.render('vwDetailProduct/accept_edit_pro', {
        layout: 'admin.hbs',
        title: 'Accept products of Users',
        product: rows[0],
        Modify: changes[0],
        details,
        auto,
        empty: rows.length === 0
    });
})

router.post('/acceptedit',roleAdmin, async (req, res) => {
    const results = await productModel.acceptEditPro(req.body.ProDeID);
    res.redirect('/admin/products/editproducts');
})

router.post('/canceledit',roleAdmin, async (req, res) => {
    const results = await productModel.NotAcceptEditPro(req.body.ProDeID);
    res.redirect('/admin/products/editproducts');
})

router.get('/addproducts',roleAdmin, async (req, res) => {
    const rows = await productModel.acceptPro();
    res.render('vwDetailProduct/admin_add_pro', {
        layout: 'admin.hbs',
        title: 'Accept products of Users',
        products: rows,
        empty: rows.length === 0
    });
})

router.get('/add/:id',roleAdmin, async (req, res) => {
    const rows = await productModel.getProByID(req.params.id);
    const details= await productModel.getDetailByID(req.params.id);
    var auto = 'Không';
    if(rows[0].AutoReset == 1){
        auto='Có';
    }
    res.render('vwDetailProduct/accept_pro', {
        layout: 'admin.hbs',
        title: 'Accept products of Users',
        product: rows[0],
        details,
        auto,
        empty: rows.length === 0
    });
})

router.post('/add',roleAdmin, async (req, res) => {
    const results = await productModel.acceptAddPro(req.body.ProID);
    console.log(req.body.ProID);
    res.redirect('/admin/products/addproducts');
})

router.post('/delete',roleAdmin, async (req, res) => {
    const results = await productModel.NotAcceptAddPro(req.body.ProID);
    res.redirect('/admin/products/addproducts');
})

router.get('/err', (req, res) => {
    throw new Error('error occured');
})

module.exports = router;