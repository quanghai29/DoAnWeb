//const restrict = require('../middlewares/auth.mdw');

module.exports = function (app) {
  //app.use('/demo', require('../routes/demo.route'));
  app.use('/account', require('../routes/account.route'));
  app.use('/user', require('../routes/user/profile.route'));
  app.use('/user', require('../routes/user/upgrade.route'));
  //app.use('/user', require('../routes/user/orders.route'));
   app.use('/user', require('../routes/user/products.route'));
   
  // app.use('/', require('../routes/category.route'));
   app.use('/categories', require('../routes/category.route'));
  //app.use('/admin/categories', restrict, require('../routes/admin/category.route'));
  app.use('/admin/categories', require('../routes/admin/category.route'));
  app.use('/admin/users',require('../routes/admin/user.route'));
  app.use('/admin/products',require('../routes/admin/products.route'));
};
