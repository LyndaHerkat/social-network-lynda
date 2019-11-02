var express = require('express');
var path = require('path');

//PARSER
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//DB
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const dbTools = require('./my_modules/db');

//ROUTE
const routeIndex = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json()); //parse les body des queries pour les avoir sous format JSON
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './public')));//Acces au ressource statique

app.use(routeIndex);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});



//Test connection BDD
dbTools.connectClientMongo(dbTools.URI, {
  useNewUrlParser: true
}, function (err) {
  if (err) {
      console.log('Impossible de se connecter au client Mongo');
      next(err);
  } else {
      console.log('connection à la base de données réussie !');
  }
});

module.exports = app;
