var express = require('express'); // access the npm express package
var path = require('path');
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;

var app = express(); // create an app instance of express.js

// require and modulate the routing requests for HTML and API
require('./app/routing/htmlRoutes')(app);
require('./app/routing/apiRoutes')(app);

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

app.use(express.static("app/public")); // virtual path

// event listener on port 3000 (required for Heroku app)
app.listen(port, function(){
  console.log("Shhh, were listening on port 3000");
});