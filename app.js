var express = require("express");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server)
var path = require("path");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));


app.get("/", (req, res) => {
    res.render("index");
})




server.listen(3000, console.log("http://localhost:3000"));