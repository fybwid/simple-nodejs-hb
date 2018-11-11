// Anytime there is GET request Server print "Welcome to fybwid restful API"
var appRouter = function (app) {
  app.get("/", function(req, res) {
    res.status(200).send("Welcome to fybwid restful API");
  });
  app.post('/data', function (req, res) {
    res.status(200).send("POST request to data");
  });
  app.get('/data', function (req, res) {
    res.status(200).send("GET request to data");
  });
}

module.exports = appRouter;