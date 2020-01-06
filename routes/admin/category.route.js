const express = require('express');
const categoryModel = require('../../models/category.model');
const productModel = require('../../models/product.model');
const config = require('../../config/default.json');
const roleAdmin = require('../../middlewares/authAdmin.mdw');
const router = express.Router();

router.get('/',roleAdmin, async (req, res) => {
    const rows = await categoryModel.all();
    res.render('vwCategories/index', {
        layout: 'admin.hbs',
        title: 'Manager',
        categories: rows,
        empty: rows.length === 0
    });
})

router.get('/add',roleAdmin, (req, res) => {
    res.render('vwCategories/add', {
        layout: 'admin.hbs',
    });
})

router.post('/add',roleAdmin, async (req, res) => {
    const result = await categoryModel.add(req.body);
    res.render('vwCategories/add', {
        layout: 'admin.hbs',
    });
})

router.get('/edit/:id',roleAdmin, async (req, res) => {
    const rows = await categoryModel.single(req.params.id);
    if (rows.length === 0) {
        throw new Error('Invalid category id');
    }
    res.render('vwCategories/edit', {
        category: rows[0],
        layout: 'admin.hbs',
    });
})

router.post('/patch',roleAdmin, async (req, res) => {
    const result = await categoryModel.patch(req.body);
    res.redirect('/admin/categories');
})

router.post('/del',roleAdmin, async (req, res) => {
    const result = await categoryModel.del(req.body.ItemID);
    res.redirect('/admin/categories');
})

router.get('/:id/products',roleAdmin, async (req, res) => {

    for (const c of res.locals.lcCategories) {
        if (c.ItemID === +req.params.id) {
            c.isActive = true;
        }
    }

    const limit = config.paginate.limit;
    const itemId = req.params.id;
    const page = req.query.page || 1;
    if (page < 1) page = 1;
    const offset = (page - 1) * limit;

    const [total, rows] = await Promise.all([
        productModel.countByCat(itemId),
        productModel.pageByCat(itemId, offset)
    ])

    let nPages = Math.floor(total / limit);
    if (total % limit > 0) nPages++;
    const page_numbers = [];
    for (i = 1; i <= nPages; i++) {
        page_numbers.push({
            value: i,
            isCurrentPage: i === +page
        })
    }

    const prev_value = page == 1 ? 1 : +page - 1;
    const next_value = page == nPages ? nPages : +page + 1;
    res.render('prototype/listprototype.hbs', {
        layout: 'admin.hbs',
        products: rows,
        empty: rows.length === 0,
        page_numbers,
        prev_value, next_value
    });

    // const rows = await productModel.allByCat(req.params.id);
    // res.render('vwProduct/allByCat', {
    //   products: rows,
    //   empty: rows.length === 0
    // });
})

router.get('/err', (req, res) => {
    throw new Error('error occured');
})

module.exports = router;