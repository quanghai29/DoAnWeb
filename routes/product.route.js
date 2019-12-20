const express = require('express');
const productModel = require('../models/product.model');

const router = express.Router();
    
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

router.get('/:id/products', async (req, res) => {
    const list = await productModel.all(req.params.id);
    const namelist = "Products";
    res.render('prototype/listprototype.hbs', {
        title: 'List Product',
        list, namelist
    });
})

router.get('/err', (req, res) => {
    throw new Error('error occured');
})

module.exports = router;