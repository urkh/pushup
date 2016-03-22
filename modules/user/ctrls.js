var mongoose = require('mongoose');  
var User  = mongoose.model('User');

//GET - Return all users in the DB
exports.find = function(req, res) {  
    User.find(function(err, users) {
    	if(err){
    		res.send(500, err.message);
    	}

        res.status(200).jsonp(users);
    });
};


//GET - Return a user with specified ID
exports.findById = function(req, res) {  
    User.findById(req.params.id, function(err, user) {
	    if(err){
	    	return res.send(500, err.message);
	    }

        res.status(200).jsonp(user);
    });
};


//POST - Insert a new user in the DB
exports.add = function(req, res) {  
    var user = new User({
        name:    	req.body.name,
        last_name:  req.body.last_name,
        email:  	req.body.email
    });

    user.save(function(err, user) {
        if(err){
        	return res.status(500).send( err.message);
        }
    	res.status(200).jsonp(user);
    });
};


//PUT - Update a register already exists
exports.update = function(req, res) {  
    User.findById(req.params.id, function(err, user) {
        user.name 		= req.body.name;
        user.last_name  = req.body.last_name;
        user.email 		= req.body.email;

        user.save(function(err) {
            if(err){
            	return res.status(500).send(err.message);
            }
      		res.status(200).jsonp(user);
        });
    });
};


//DELETE - Delete a user with specified ID
exports.delete = function(req, res) {  
    User.findById(req.params.id, function(err, user) {
        user.remove(function(err) {
            if(err) {
            	return res.status(500).send(err.message);
            }
      		res.status(200).send();
        })
    });
};