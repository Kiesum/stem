var mongoose = require('mongoose');

var trunkSchema = new mongoose.Schema({
  body: Object,
});

module.exports = mongoose.model('Trunk', trunkSchema);