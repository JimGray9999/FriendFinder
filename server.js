var express = require('express');

var app = express();

app.get('/', function (request, response){
  response.sendfile(__dirname + '/app/public/home.html');
});

app.listen(8080, function(){
  console.log("Shhh, were listening on port 8080");
});