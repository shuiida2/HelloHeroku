var express = require('express');
var app = express();

app.get('/', function(reg, res) {
  res.send('Hello Heroku!');
});

app.listen(process.env.PORT || 8080);
