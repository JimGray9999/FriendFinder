var express = require('express'); // access the npm express package
var path = require('path');
var parser = require('body-parser');

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

// direct GET request to the home page
app.get('/', function (req, res){
  res.sendfile(__dirname + '/app/public/home.html');
});

// direct GET requests for the survey page
app.get('/survey.html', function (req, res){
  res.sendfile(__dirname + '/app/public/survey.html');
});

// event listener on port 3000 (required for Heroku app)
app.listen(port, function(){
  console.log("Shhh, were listening on port 3000");
});