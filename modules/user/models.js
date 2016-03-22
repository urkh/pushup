var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var user = new Schema({  
  name:       { type: String },
  last_name:  { type: String },
  email:      { type: String }
});

module.exports = mongoose.model('User', user);  