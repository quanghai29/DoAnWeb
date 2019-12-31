const express = require('express');
const userModel=require('../../models/user.model');
const config = require('../../config/default.json');

const router = express.Router();

router.get('/', async (req, res) => {
    const rows = await userModel.allUser();
    res.render('vwUser/index', {
        layout: 'admin.hbs',
        title: 'Manager Users',
        users: rows,
        empty: rows.length === 0
    });
})

router.get('/err', (req, res) => {
    throw new Error('error occured');
})

module.exports = router;