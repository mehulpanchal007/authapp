var userModel = require('../models/user.model');

async function userSignup(req, res) {
    const signup_username = req.body.username;
    const signup_password = req.body.password;
    const signup_password_verify = req.body.password_verify;
  
    if (signup_password !== signup_password_verify) {
        res.render('signup', {alerts: "The passwords don't match!!!"});
    }
    else {
        const signup_query = {"username": signup_username, "password": signup_password};
        const user = new userModel(signup_query);
        try {
        await user.save();
        res.redirect('/users/login');
        }
        catch (error) {
        res.status(500).send(error);
        }
    }
}

module.exports = userSignup;