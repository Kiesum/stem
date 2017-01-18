var mongoose = require('mongoose');

var branchSchema = new mongoose.Schema({
  parent_id: String,
  title: String,
  body: String,
});

module.exports = mongoose.model('Branch', branchSchema);