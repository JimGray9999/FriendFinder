var path = require('path'); // package for path

// link to the friends.js JSON
var friends = require("../data/friends");

// export function out to server.js
module.exports = function(app) {
    
  // display a GET request for all of the current friends listed in the JSON (data/friends.js)
  app.get("/api/friends", function(req, res) {
      res.json(friends);
    })

  // use the POST request to add to the friends.js
  app.post("/api/new", function(req, res) {
    var newFriend = findAfriend(friends, req.body);
    friends.push(req.body); // add the user's entries to the friends list
    res.json(newFriend);
  })
  
  // calculate the best friend match
  function findAfriend (friends, you) {
    var diffScore = 0;
    var bestDiff = 100; // set to a default value higher than worst possible score
    var newBFF = "";

    // loop thru each friend, calucate the absolute difference from 
    // the user's responses with the data of friends
    for (i = 0; i < friends.length ; i++) {
      for (j = 0 ; j < 10 ; j++) {
        diffScore += (Math.abs(friends[i].scores[j] - you.scores[j]));
      }
      if (diffScore < bestDiff) {
        bestDiff = diffScore; // update to the current best score
        diffScore = 0; // reset the diffScore for the next loop iteration
        newBFF = friends[i]; // update with the current best friend match
      }
    }
    console.log("diffScore: " + diffScore);
    console.log("bestDiff: "+ bestDiff);
    console.log("New BFF: " + newBFF.name);
    return newBFF; // return the newBFF value
  }
};