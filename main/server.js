var express = require('express');  
var mongoose = require('mongoose');
var logger = require('express-logger');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


var app = express();  
var server = require('http').Server(app);  
//var io = require('socket.io')(server);


app.use(express.static(__dirname + '/public'));
app.use(logger({path: "pushup.log"}));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(methodOverride());

mongoose.connect('mongodb://127.0.0.1/pushup', function(err, res) {  
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  }
  server.listen(8080, function() {
    console.log("Node server running on http://127.0.0.1:8080");
  });
});








/*
var messages = [];

io.on('connection', function(socket) {  
  console.log('Alguien se ha conectado con Sockets');
  
  socket.emit('messages', messages);

  socket.on('new-message', function(data) {
    
    messages.push(data);
    io.sockets.emit('messages', messages);
  
  });

});*/



// Global urls
var user = require('../modules/user/urls');  
app.use('/api', user);  