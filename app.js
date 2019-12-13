const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, './.env') })

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Car = require('./app/models/carsModel'), //created model loading here
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
// mongoose.connect(process.env.MONGO_ENDPOINT);
// console.log('mongodb://' + process.env.MONGO_ENDPOINT)
mongoose.connect(process.env.MONGO_ENDPOINT); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var r = require('./app/routes/carsRoutes'); //importing route
var carAPI = new r();
carAPI.routes(app); //register the route

app.listen(port);
console.log('Cars API server started on: ' + port);