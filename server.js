var express = require('express');
var app = express();
var path = require('path')
var fs = require('fs')
var HAIKUS_DATA = path.join(__dirname + '/data/haikus.json');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.get('/haikus', function (req, res) {
  fs.readFile(HAIKUS_DATA, function(err, data){
    if(err){
      console.error(err)
      return
    }
    res.json(JSON.parse(data))
  });
});

app.use(express.static('client/build'));


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('You are welcome, friend');
  console.log('A repose from weary work');
  console.log('Sit, and rest, and read');
  console.log('Listening at http://%s:%s', host, port);
});
