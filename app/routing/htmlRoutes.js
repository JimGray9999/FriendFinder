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
  // direct GET request to the home page
  router.route('/') 
  .get(function (req, res){
    res.sendfile(path.join(__dirname , 'app', 'public', 'home.html'));
  })

  // direct GET requests for the survey page
  router.route('/survey.html')
  .get(function (req, res){
    res.sendfile(path.join(__dirname , 'app', 'public', 'survey.html'));
  })
  };