var mongoose = require('mongoose');

var trunkSchema = new mongoose.Schema({
  title: String,
  body: String,
});

module.exports = mongoose.model('Trunk', trunkSchema);