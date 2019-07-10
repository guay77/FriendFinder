// npm packages for server
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");




// Signals the creation of an "expreess" server
var app = express();

// Sets up initial port environment. Will be used in listener
var PORT = process.env.PORT || 8080;



// Body parser retrieves and formats the data of a request and makes it available on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// Routing paths for files. "Map" of the app.
require(path.join(__dirname, '/app/routing/apiroutes.js'))(app);
require(path.join(__dirname, '/app/routing/htmlRoutes.js'))(app);

// Listener sets up the server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});