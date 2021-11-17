const sessions = require('express-session');

const oneDay = 1000 * 60 * 60 * 24;
const authSession = sessions(
{
    secret: "CrackItIfYouCan",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
});

module.exports = authSession;