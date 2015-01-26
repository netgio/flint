var express = require("express");

var app = express();
port = process.env.PORT || 8080;


app.get('/*', function(req, res) {
	  res.statusCode = 200;
	  return res.send('Hello Node! <br/><hr/>' + JSON.stringify(req.headers));
	});


app.listen(port); //the port you want to use
console.log("Express server running at => http://localhost:" + port + "/\nCTRL + C to shutdown");
