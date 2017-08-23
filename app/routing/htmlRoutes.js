var path = require('path');

module.exports = function(app) {
  // direct GET requests for the survey page
  app.get("/survey", function (req, res){
    res.sendfile(path.join(__dirname , '../public/survey.html'));
  })

  // route any unmatching GET request to the default home page
  app.get('/', function (req, res){
    res.sendfile(path.join(__dirname , '../public/home.html'));
  })
};