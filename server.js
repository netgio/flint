var express = require("express");

var app = express();
port = process.env.PORT || 8080;

app.configure(function () {
    app.use("/", //the URL throught which you want to access to you static content
        express.static(__dirname) //where your static content is located in your filesystem
    );
    app.use(express.bodyParser());
});


app.get('/*', function(req, res) {
	  res.statusCode = 200;
	  return res.send('Hello Node!');
	});


app.listen(port); //the port you want to use
console.log("Express server running at => http://localhost:" + port + "/\nCTRL + C to shutdown");
