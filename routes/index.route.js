// Imports
var express = require('express');
var router = express.Router();
var userModel = require('../models/user.model');
const userSignup = require('../helpers/signup.helper');



/**
 * Render Home page on GET /
 */
router.get('/', function(req, res) {
  res.render('index', { title: 'AuthApp' });
});



/**
 * Render Login page on GET /signup
 */
router.get('/signup', function name(req, res) {
  res.render('signup');
});



/**
 * Login user on POST /signup
 * Body Type: URLEncoded
 */
router.post('/signup', userSignup);



/**
 * Render Login page on GET /users/login
 */
 router.get('/users/login', function (req, res) {
  res.render('login');
});



// Exporting Router
module.exports = router;
