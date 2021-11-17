function checkAuth(req, res, next) {
    if(req.session && req.session.username) {
      next();
    }
    else {
      res.redirect('/users/login');
    }
}

module.exports = checkAuth;