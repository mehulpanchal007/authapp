const mongoose = require('mongoose');

async function mongooseConnect() {
  await mongoose.connect('mongodb://database/db');
}

mongooseConnect().catch(err => console.log(err));


module.exports = mongooseConnect;