var http = require('http');
var sql = require('mysql');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var express = require('express');
var app = express();
var path = require('path');

var port = process.env.PORT || 3000;

var line = ['If you joined a circus what circus act would you be?'];

//app.use(bodyParser.json())
// Serves the static files from client side HTML, JS, CSS, images
app.use(express.static(__dirname + '/public'))
//app.use(cookieParser);

app.get('/', function(req, res) {
var fileName = path.join(__dirname+'/../client/index.html');
res.sendFile(fileName);
});

// app.get('/', function(req, res) {
//   var options = {
//     headers: {
//       'content-type': 'application/json'
//     }
//   };

// var fileName = path.join(__dirname+'/../client/index.html');

// res.sendFile(fileName, options, function(err) {
//   if(err) {
//     console.error(err);
//   } else {
//     res.status(200).send('All good!')
//   }
// });
// //res.send and res.end difference?
// // res.end(JSON.stringify(line));
// });

app.post('/', function(req, res) {
  var body = [];
  req.on('data', function(chunk) {
    body.push(chunk);
  }).on('end', function() {
    body = Buffer.concat(body).toString();
    line.push(JSON.parse(body));
  });
  res.end();
})


app.listen(port, function() {
  console.log('Express server is running and listening on port: ' + port);
})