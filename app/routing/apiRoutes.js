var path = require('path');

// link to the friends.js JSON
var friends = require("../data/friends");

module.exports = function(app) {
    
  // display a GET request for all of the current friends listed in the JSON (data/friends.js)
  app.get("/api/friends", function(req, res) {
      res.json(friends);
    })

  // use the POST request to add to the friends.js
  app.post("/api/new", function(req, res) {
    friends.push(req.body);
    findAfriend(friends);
    res.json(friends, friends[friends.length-1]);
  })

  function findAfriend (friends, you) {
    var diffScore = [];
    var diff = 0;

    for (i = 0; i < friends.length ; i++) {
      for (j = 0 ; j < 10 ; j++) {
        diffScore.push(Math.abs(friends[i].scores[j] - you.scores[j]));
      }
    }
  }
};