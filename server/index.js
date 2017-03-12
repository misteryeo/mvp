var http = require('http');
var mysql = require('mysql');
var bodyParser = require('body-parser');
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

app.use(bodyParser.json())
app.use(express.static('public'));


app.get('/conversations', function(req, res) {
  connection.query('SELECT oneline FROM convolines ORDER BY RAND() LIMIT 1', function(error, results, fields){
    if(error) {
      console.error(error);
    } else {
      console.log('results', results[0].oneline);
      res.send(results[0].oneline);
    }
  });
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


app.listen(port, function() {
  console.log('Express server is running and listening on port: ' + port);
})