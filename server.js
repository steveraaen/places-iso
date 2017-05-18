var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var Places = require("./models/Places.js");

// ----------------------------------------
var app = express();
var PORT = process.env.PORT || 3000;
// ----------------------------------------
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("./public"));
// ----------------------------------------
mongoose.connect("mongodb://steve:felisa@ds145790.mlab.com:45790/mongolabfree");
var db = mongoose.connection;
db.on("error", function(err) {
    console.log("Mongoose Error: ", err);
});
db.once("open", function() {
    console.log("Mongoose connection successful.");
});
// ----------------------------------------
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

/*app.get("/api", function(req, res) {
  Places.find({}).sort([
    ["date", "descending"]
  ]).limit(5).exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});*/

app.post('/api', function(req, res) {

        Places.create({
            placeArray: req.body
        })
    })
    // ----------------------------------------
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
module.exports = app;