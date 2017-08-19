var express = require('express'); // access the npm express package

var port = process.env.PORT || 3000;

var app = express(); // create an app instance of express.js

// direct GET request to the  home page
app.get('/', function (req, res){
  res.sendfile(__dirname + '/app/public/home.html');
});

// direct GET requests for the survey page
app.get('/survey.html', function (req, res){
  res.sendfile(__dirname + '/app/public/survey.html');
});

// event listener on port 8080
app.listen(port, function(){
  console.log("Shhh, were listening on port 8080");
});