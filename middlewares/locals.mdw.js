const categoryModel = require('../models/category.model');
const productModel = require('../models/product.model');
const userModel = require('../models/user.model');
const moment = require('moment');//formart thời gian
module.exports = function (app) {
  app.use(async (req, res, next) => {
    // const rows = await categoryModel.allWithDetails();
    // res.locals.lcCategories = rows;

    if (typeof (req.session.isAuthenticated) === 'undefined') {
      req.session.isAuthenticated = false;
    }
    res.locals.isAuthenticated = req.session.isAuthenticated;
    res.locals.authUser = req.session.authUser;
    res.locals.role = req.session.role;
    if (res.locals.role === 1) {
      res.locals.bidder = true;
      console.log(`bidder` + res.locals.bidder);
    }
    else if (res.locals.role === 2) {
      res.locals.seller = true;
      console.log('seller' + res.locals.seller);
    }
    else if (res.locals.role === 3) {
      res.locals.admin = true;
      console.log('admin' + res.locals.admin);
    }
    else {
      res.locals.bidder = false;
      res.locals.seller = false;
      res.locals.admin = false;
    }
    next();
  })

  app.use(async (req, res, next) => {
    const rows = await categoryModel.allWithDetail();
    res.locals.lcCategories = rows;
    next();
  })

  app.use(async (req, res, next) => {
    const rows = await userModel.numUserUpgrade();
    res.locals.lcUpgrades = rows[0];
    next();
  })

  app.use(async (req, res, next) => {
    const rows = await productModel.numProAdd();
    res.locals.lcProAdd = rows[0];
    next();
  })

  app.use(async (req, res, next) => {
    const rows = await productModel.getTopTimeEnd();

    for(var i=0; i<rows.length;i++)
    {
      rows[i].TimeEnd= moment(rows[i].TimeEnd,'YYYY-MM-DDTHH:mm:ss.SSSZ').format('YYYY-MM-DD HH:mm:ss');
    }
    console.log(rows);
    res.locals.topTimeEnd = rows;
    next();
  })

  app.use(async (req, res, next) => {
    const rows = await productModel.getTopValue();

    for(var i=0; i<rows.length;i++)
    {
      rows[i].TimeEnd= moment(rows[i].TimeEnd,'YYYY-MM-DDTHH:mm:ss.SSSZ').format('YYYY-MM-DD HH:mm:ss');
    }
    console.log(rows);
    res.locals.topValue = rows;
    next();
  })

  app.use(async (req, res, next) => {
    const rows = await productModel.numModifieds();
    res.locals.lcModify = rows[0];
    next();
  })
};