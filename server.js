var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var db = require("./models");

var app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname, "public")));


// listen on port 3000
// INSERT DIFFERENT PORT LANGUAGE HERE!!!!!
// AND DROP YOUR OLD BURGER DATABASE TO MAKE LOCAL MACHINE WORK
var PORT = process.env.PORT || 3000;

db.sequelize.sync().then(function(){
  app.listen(PORT, function(){
    console.log("Listening on port %s", PORT);
  });
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller");

app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);


