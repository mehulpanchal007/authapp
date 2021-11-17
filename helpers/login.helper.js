var userModel = require('../models/user.model');


async function userLogin(req, res) {
    const login_username = req.body.username;
    const login_password = req.body.password;
  
    const login_query = {"username": login_username, "password": login_password};
  
    const users = await userModel.findOne(login_query);
    try {
      if (users !== null) {
        req.session.username=login_username;
        res.redirect('/users/user/' + req.session.username);
      }
      else {
        res.render('login', {alerts: "Try Again"});
      }
    }
    catch (error) {
      res.status(500).send(error);
    }
}

module.exports = userLogin;