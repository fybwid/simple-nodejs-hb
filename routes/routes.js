// Anytime there is GET request Server print "Welcome to fybwid restful API"
var appRouter = function (app) {
  app.get("/", function(req, res) {
    res.status(200).send("Welcome to fybwid restful API");
  });
}

module.exports = appRouter;