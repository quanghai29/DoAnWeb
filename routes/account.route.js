const express = require('express');
const bcrypt = require('bcryptjs');
const userModel = require('../models/user.model');
const moment = require('moment');
const router = express.Router();

router.get('/signup', async (req, res) => {
  res.render('vwAccount/signup', {
    layout: false,
  });
});


router.post('/signup', async (req, res) => {
  const N = 10;
  var gioitinh = 'Nam';

  //Kiểm tra tên username người dùng nhập vào đã tồn tại trong database chưa
  var username = req.body.f_Username;
  const checkName = await userModel.checkUserNames(username);

  //Kiểm tra email đăng kí đã tồn tại chưa
  var email=req.body.f_Email;
  const checkMail=await userModel.checkMail(email);
  if (checkName || checkMail) {
    res.render('vwAccount/signup', {
      layout: false,
      checkName,
      checkMail
    });
  }
  else {
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
    const result = await userModel.add(entity);
    console.log(result);
    res.render('home');
  }
});

router.get('/login', async (req, res) => {
  res.render('vwAccount/login', {
    layout: false
  });
});

router.post('/login', async (req, res) => {
  const user = await userModel.singleByUsername(req.body.username);
  var rs = false;
  if (user != null) {
    rs = bcrypt.compareSync(req.body.password, user.f_Password);
  }

  if (rs === false || user === null) {
    return res.render('vwAccount/login', {
      layout: false,
      err_message: 'Login failed ',
    });
  }

  delete user.f_Password;

  req.session.isAuthenticated = true;
  req.session.authUser = user;
  req.session.role = user.ID_loai_member;

  if(req.session.role === 3 )
  {
    res.redirect('/admin/categories/');
  }
  else{
    const url = req.query.retUrl || '/';
    res.redirect(url);
  }
  
})

router.post('/logout', (req, res) => {
  req.session.isAuthenticated = false;
  req.session.authUser = null;
  req.session.role = -1;
  res.redirect(req.headers.referer);
});
module.exports = router;