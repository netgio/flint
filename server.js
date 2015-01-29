var express = require("express");
var os = require('os');

var app = express();
port = process.env.PORT || 8080;

var ifaces = os.networkInterfaces();

var ifacelist = "IPs: ";

Object.keys(ifaces).forEach(function (ifname) {
  var alias = 0;

  ifaces[ifname].forEach(function (iface) {
    if ('IPv4' !== iface.family || iface.internal !== false) {
      // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
      return;
    }

    if (alias >= 1) {
      // this single interface has multiple ipv4 addresses
       ifacelist += ifname + ':' + alias + '(' + iface.address + ')<br/>';
    } else {
      // this interface has only one ipv4 adress
       ifacelist += ifname + '(' + iface.address + ')<br/>';
    }
  });
});

app.get('/*', function(req, res) {
	  res.statusCode = 200;
	  return res.send('Hello Node! <br/><hr/>' 
		+ ifacelist + '<br/><hr/>'
		+ JSON.stringify(req.headers));
	});


app.listen(port); //the port you want to use
console.log("Express server running at => http://localhost:" + port + "/\nCTRL + C to shutdown");
