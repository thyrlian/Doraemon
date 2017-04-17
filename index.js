var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

requireAllFilesInDir('api');

app.listen(port);

function requireAllFilesInDir (dir) {
  require('fs').readdirSync(dir).forEach(function (file) {
    if (/.*\.js/.test(file)) {
      require('./' + dir + '/' + file)(app);
    }
  });
}
