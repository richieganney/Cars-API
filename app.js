const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, './.env') })

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  Car = require('./app/models/carsModel'), //created model loading here
  bodyParser = require('body-parser');

// mongoose instance connection url connection
var db = require('./app/databases/mongooseContext')
var mongoose = new db();
mongoose.mongoosePromise();
mongoose.connectMongoose();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var controller = require('./app/controllers/carsController'); //importing route
var carAPI = new controller();
carAPI.routes(app); //register the route

app.listen(port);
console.log('Cars API server started on: ' + port);