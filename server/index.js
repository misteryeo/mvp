var http = require('http');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var express = require('express');
var cors = require('cors');
var path = require('path');


var app = express();
app.use(cors());

var port = process.env.PORT || 3000;

var line = ['If you joined a circus what circus act would you be?'];

var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'icebreaker'
})

//app.use(bodyParser.json())
// Serves the static files from client side HTML, JS, CSS, images
app.use(express.static('public'));
//app.use('/scripts', express.static('node_modules/angular'));
//app.use(cookieParser);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/conversations', function(req, res) {
  connection.query('SELECT oneline FROM convolines ORDER BY RAND() LIMIT 1', function(error, results, fields){
    if(error) {
      console.error(error);
    } else {
      console.log('results', results[0].oneline);
      res.send(results[0].oneline);
    }
  });
    // console.log('after resul ts and error')
});


app.post('/conversations', function(req, res) {
  var body = [];
  req.on('data', function(chunk) {
    body.push(chunk);
  }).on('end', function() {
    body = Buffer.concat(body).toString();
    line.push(JSON.parse(body));
  });
  res.send();
})

app.options("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.send(200);
});

app.listen(port, function() {
  console.log('Express server is running and listening on port: ' + port);
})