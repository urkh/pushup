var express = require('express');
var app = express();  

var model = require('./models')(app);
var user = require('./ctrls');

var router = express.Router();

router.route('/users')  
  .get(user.find)
  .post(user.add);

router.route('/users/:id')  
  .get(user.findById)
  .put(user.update)
  .delete(user.delete);

module.exports = router;