var express = require('express');
var app = express();
const mongoose = require('mongoose');
const config = require('./config');
var bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

require('./app/routes/student.routes.js')(app);
mongoose.connect(config.mongoUrl, {useNewUrlParser: true});

// Create a Server
var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("App listening at http://%s:%s", host, port)

})