const https = require('https');
var fs = require('fs');

var options = {
  'method': 'GET',
  'hostname': 'www.facebook.com',
  'path': '/',
  'headers': {
  },
  'maxRedirects': 20
};

var req = https.request(options, function (res) {
  var chunks = [];

  console.log(res.statusCode);
  
  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

req.end();