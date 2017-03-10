var http = require('http');
var bodyParser = require('body-parser')
var express = require('express');
var app = express();

var line = ['If you joined a circus what circus act would you be?'];

app.get('/', function(req, res) {
  res.writeHead(200, {
    'content-type': 'application/json'
  });
  //res.send and res.end difference?
  res.end(JSON.stringify(line));
})

app.post('/', function(req, res) {
  var body = [];
  res.on('data', function(chunk) {
    body.push(chunk);
  }).on('end', function() {
    console.log(body);
    body = Buffer.concat(body).toString();
    line.push(JSON.parse(body));
  });
})


app.listen(3000, function() {
  console.log('Express server is running!')
})