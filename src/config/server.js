const express = require('express');
const app = express();

app.use(express.static(__dirname + '/../../dist'));

app.get('/', function(req, res) {
  res.sendFile('/index.html');
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!'); // eslint-disable-line
});
