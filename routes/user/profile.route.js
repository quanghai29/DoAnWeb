const express = require('express');
//const productModel=require('../../models/product.model');
const userModel = require('../../models/user.model');
const roleSeller = require('../../middlewares/authSeller.mdw');
const roleBidder = require('../../middlewares/authBidder.mdw');
const bcrypt = require('bcryptjs');
const moment = require('moment');
const router = express.Router();


//Chỉnh sửa lại profile có thể edit được
router.get('/myprofile/:id', roleBidder, async (req, res) => {
    const rows = await userModel.getProfileByID(req.params.id);
    const evaluates = await userModel.getEvaluateByID(req.params.id);
    console.log(rows);
    res.render('vwUser/myprofile.hbs', {
        title: 'your profile',
        profile: rows[0],
        evaluate: evaluates[0],
    });
})

// edit được profile
router.get('/myprofile/edit/:id', roleBidder, async (req, res) => {
    const rows = await userModel.getProfileByID(req.params.id);
    const evaluates = await userModel.getEvaluateByID(req.params.id);
    console.log(rows);
    res.render('vwUser/editProfile.hbs', {
        title: 'your profile',
        profile: rows[0],
        evaluate: evaluates[0],
    });
})

router.post('/myprofile/edit/:id', roleBidder, async (req, res) => {
    const id=req.params.id;
    const N = 10;
    var gioitinh = 'Nam';
  
    const hash = bcrypt.hashSync(req.body.raw_password, N);
    console.log(req.body.dob);
    const dob = moment(req.body.dob, 'DD/MM/YYYY').format('YYYY-MM-DD');
    if (req.body.value_GioiTinh == 1) {
      gioitinh = 'Nữ';
    }
    const entity = req.body;
    entity.f_Password = hash;
    entity.f_DOB = dob;
    entity.f_GioiTinh = gioitinh;
    entity.f_UpgradeWaitStatus = 0;

    delete entity.value_GioiTinh;
    delete entity.raw_password;
    delete entity.dob;
    delete entity.confirmPass;
    console.log(entity);
    const result = await userModel.patch(entity);
    console.log(result);
    res.redirect('/');
})

router.get('/err', (req, res) => {
    throw new Error('error occured');
})
module.exports = router;