const express = require('express');
const bcrypt = require('bcryptjs');
const userModel = require('../models/user.model');
const moment = require('moment');
const router = express.Router();

router.get('/signup', async (req, res) => {
  res.render('vwAccount/signup',{
    layout:false
  });
  
});


router.post('/signup', async (req, res) => {
  const N = 10;
  var gioitinh='Nam';
  const hash = bcrypt.hashSync(req.body.raw_password, N);
  const dob = moment(req.body.dob, 'DD/MM/YYYY').format('YYYY-MM-DD');
  if(req.body.value_GioiTinh==1)
  {
    gioitinh='Nữ';
  }
  const entity = req.body;
  entity.f_Password = hash;
  entity.f_DOB = dob;
  entity.f_GioiTinh=gioitinh;
  
  delete entity.value_GioiTinh;
  delete entity.raw_password;
  delete entity.dob;
  console.log(entity);
  const result = await userModel.add(entity);
  console.log(result);

  res.render('home');
});

router.get('/login', async (req, res) => {
  res.render('vwAccount/login',{
    layout:false
  });
});

router.post('/login', async (req, res) => {
  const user = await userModel.singleByUsername(req.body.username);
  if (user === null)
    throw new Error('Invalid username or password.');

  const rs = bcrypt.compareSync(req.body.password, user.f_Password);
  if (rs === false)
    return res.render('vwAccount/login', {
      layout: false,
      err_message: 'Login failed '
    });

  delete user.f_Password;

  req.session.isAuthenticated = true;
  req.session.authUser = user;
  req.session.role=user.ID_loai_member;

  const url = req.query.retUrl || '/';
  res.redirect(url);
})

router.post('/logout', (req, res) => {
  req.session.isAuthenticated = false;
  req.session.authUser = null;
  req.session.role=-1;
  res.redirect(req.headers.referer);
});
module.exports = router;