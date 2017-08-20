var express = require('express'); // access the npm express package
var path = require('path');
var parser = require('body-parser');
var htmlRoutes = require('/routing/htmlRoutes');
var apiRoutes = require('/routing/apiRoutes');

var port = process.env.PORT || 3000;

var app = express(); // create an app instance of express.js

// mount html and api routes
app.use('/htmlRoutes', htmlRoutes);
app.use('/apiRoutes', apiRoutes);

// event listener on port 3000 (required for Heroku app)
app.listen(port, function(){
  console.log("Shhh, were listening on port 3000");
});