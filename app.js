// Main Imports
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');


// Database Setup
var mongooseConnect = require('./helpers/database.helper');



// Express Engine Setup
var app = express();
const server = app.listen(3000);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



// Session Management Setup
var authSession = require('./helpers/session.helper');
app.use(cookieParser());
app.use(authSession);
app.use(function(req,res,next){res.locals.session = req.session;next();});



// Routing Setup
var indexRouter = require('./routes/index.route');
var usersRouter = require('./routes/users.route');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);



// PUG Templating View Engine Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');




// Exporting Express Engine
module.exports = app;