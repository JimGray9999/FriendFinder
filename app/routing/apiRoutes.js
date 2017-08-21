var express = require('express'); // access the npm express package
var path = require('path');
var bodyParser = require('body-parser');
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

var router = express.Router();


module.exports = function(app) {
  
// display a GET request for all of the current friends listed in the JSON (data/friends.js)
};