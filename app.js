// Call installed modules
var express = require("express");
var bodyParser = require("body-parser");

var routes = require("./routes/routes.js");
var app = express();

// Accept both JSON and URL encoded values
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

var server = app.listen(process.env.PORT, process.env.IP, function () {
    console.log("app running on port.", server.address().port);
});