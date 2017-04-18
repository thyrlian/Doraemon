var express = require('express');
var app = express();
var router = express.Router();
var port = process.env.PORT || 3000;

requireRoutingFilesInDir('api');

app.listen(port);

function requireRoutingFilesInDir (dir) {
  require('fs').readdirSync(dir).forEach(function (file) {
    if (/.*\.js/.test(file)) {
      app.use('/', require('./' + dir + '/' + file)(router));
    }
  });
}
