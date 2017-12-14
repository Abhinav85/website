var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    console.log("Dirname",__dirname);
    res.sendFile(path.resolve(__dirname + "/public/index.html"));
});

app.get('/bundle.js', function(req, res) {
    console.log("Dirname",__dirname);
    res.sendFile(path.resolve(__dirname + "/public/bundle.js"));
});

app.listen(8000);