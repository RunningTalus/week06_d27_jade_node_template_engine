var express = require('express');
var app = express();
var jade = require('jade');

app.get('/', function(req, res) {
	res.send('<h1>Hello Boulder</h1>');
});

var server = app.listen(8743, function() {
	console.log('Express server listening on port ' + server.address().port);
});
