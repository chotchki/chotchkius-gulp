var express = require('express');
var app = express();

exports.start = function(){
	var server = app.listen(3000, function(){
		var host = server.address().address;
		var port = server.address().port;

		console.log('Server started on http://%s:%s', host, port);
	});
}