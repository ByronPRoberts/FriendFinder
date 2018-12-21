var express = requrire('express');
var path = require('path');
var apiRoutes = require('./app/routing/apiRoutes.js');
var htmlRoutes = require('./app/routing/htmlRoutes.js');

var app = express();
var PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

apiRoutes(app);
htmlRoutes(app);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });