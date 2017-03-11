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
  host: 'http://127.0.0.1',
  user: 'root',
  password: '',
  database: 'icebreaker'
})

//app.use(bodyParser.json())
// Serves the static files from client side HTML, JS, CSS, images
app.use(express.static('public'));
//app.use('/scripts', express.static('node_modules/angular'));
//app.use(cookieParser);

app.get('/conversations', function(req, res) {
  console.log('Icecream?');
  connection.query('SELECT oneline FROM convolines ORDER BY RANDOM() LIMIT 1', function(error, results, fields){
    if(error) {
      console.error(error);
    }
    console.log('results', results);
    res.send();
  });
});

// app.get('/', function(req, res) {
  
//   var fileName = path.join(__dirname+'/../client/index.html');

//   res.sendFile(fileName);

// });

app.post('/', function(req, res) {
  var body = [];
  req.on('data', function(chunk) {
    body.push(chunk);
  }).on('end', function() {
    body = Buffer.concat(body).toString();
    line.push(JSON.parse(body));
  });
  res.send();
})


app.listen(port, function() {
  console.log('Express server is running and listening on port: ' + port);
})