const express = require('express');
const userModel = require('../../models/user.model');
const config = require('../../config/default.json');
const roleAdmin = require('../../middlewares/authAdmin.mdw');
const router = express.Router();

router.get('/',roleAdmin, async (req, res) => {
    const rows = await userModel.allUser();
    res.render('vwUser/index', {
        layout: 'admin.hbs',
        title: 'Manager Users',
        users: rows,
        empty: rows.length === 0
    });
})


router.get('/sensorup',roleAdmin, async (req, res) => {
    const rows = await userModel.requestOfUsers();
    res.render('vwUser/sensorupgrade', {
        layout: 'admin.hbs',
        title: 'Sensorship of Users',
        users: rows,
        empty: rows.length === 0
    });
})

router.post('/acceptupgrade/:id',roleAdmin, async (req, res) => {
    const rows = await userModel.acceptUp(req.params.id);
    res.redirect('/admin/users/sensorup');
})

router.get('/err', (req, res) => {
    throw new Error('error occured');
})

module.exports = router;