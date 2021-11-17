// Imports
var express = require('express');
var router = express.Router();
var userModel = require('../models/user.model');
var checkAuth = require('../middlewares/checkAuth.middleware');
var userLogin = require('../helpers/login.helper');



/**
 * Login user on POST /users/login
 * Body Type: JSON
 * Data: {"username": "exampleusername", "password", "examplepassword"}
 */
 router.post('/login', userLogin);



/**
 * User Profile on /users/[exampleUsername]
 */
router.get('/user/:username', checkAuth, function (req, res) {
  res.render('user');
});



/**
 * Logout on GET /logout
 */

router.get('/logout', checkAuth, function (req, res) {
  req.session = null;
  res.clearCookie('connect.sid');
  res.redirect('/users/login');
});



// Exporting Router
module.exports = router;
