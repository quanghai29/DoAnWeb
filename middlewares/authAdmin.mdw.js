module.exports = (req, res, next) => {
    if (req.session.isAuthenticated === false)
      return res.redirect(`/account/login?retUrl=${req.originalUrl}`);
      //Nếu là bidder truy cập vào chức năng bán hàng
    if(req.session.role !== 3)
      throw new Error('You don"t enough role');
    next();
}