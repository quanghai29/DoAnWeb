const express = require('express');
const categoryModel = require('../models/category.model');
const config = require('../config/default.json');

const router = express.Router();

router.get('/', async (req, res) => {
    const categoryMobile = await categoryModel.allByList(1);
    const categoryLaptop = await categoryModel.allByList(2);
    res.render('home',
        {
            categoryMobile, categoryLaptop,
        })
})

module.exports = router;