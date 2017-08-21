var express = require('express'); // access the npm express package
var path = require('path');
var bodyParser = require('body-parser');
var htmlRoutes = require('./app/routing/htmlRoutes');
var apiRoutes = require('./app/routing/apiRoutes');

var port = process.env.PORT || 3000;

var app = express(); // create an app instance of express.js

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

// event listener on port 3000 (required for Heroku app)
app.listen(port, function(){
  console.log("Shhh, were listening on port 3000");
});