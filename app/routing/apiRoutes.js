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
    var newFriend = findAfriend(friends, req.body);
    friends.push(req.body);
    res.json(newFriend);
  })

  function findAfriend (friends, you) {
    var diffScore = 0;
    var bestDiff = 100;
    var newBFF = "";

    for (i = 0; i < friends.length ; i++) {
      for (j = 0 ; j < 10 ; j++) {
        diffScore += (Math.abs(friends[i].scores[j] - you.scores[j]));
      }
      if (diffScore < bestDiff) {
        bestDiff = diffScore;
        diffScore = 0;
        newBFF = friends[i];
      }
    }
    console.log("diffScore: " + diffScore);
    console.log("bestDiff: "+ bestDiff);
    console.log("New BFF: " + newBFF.name);
    return newBFF;
  }
};