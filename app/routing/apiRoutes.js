var path = require('path');

// link to the friends.js JSON
var friendsData = require("../data/friends");

module.exports = function(app) {
    
  // display a GET request for all of the current friends listed in the JSON (data/friends.js)
  app.get("/api/friends", function(req, res) {
      res.json(friendsData);
    })

  // use the POST request to add to the friends.js
  app.post("/api/new", function(req, res) {
    friendsData.push(req.body);
    console.log(req.body);
    res.json(friendsData);
  })
};