var mongoose = require('mongoose');

var branchfullSchema = new mongoose.Schema({
  data: Object
});

module.exports = mongoose.model('Branchfull', branchfullSchema);