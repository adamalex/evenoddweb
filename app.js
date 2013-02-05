var express = require('express');
var http = require('http');
var app = express();


// SERVICE CONFIGURATION

app.configure(function () {
	app.set('port', process.env.PORT || 4004);
	app.use(express.logger('dev'));
	app.use(app.router);
});

app.configure('development', function () {
	app.use(express.errorHandler());
});


// PLACEHOLDER ROUTES WITH FIXED RESPONSES

app.get('/', function (req, res) {
	res.json({
		service: 'evenoddweb',
		value: ((new Date()).getTime()%2 === 0) ? 'even' : 'odd'
	});
});


// HTTP SERVICE STARTUP

http.createServer(app).listen(app.get('port'), function () {
	console.log("Express server listening on port " + app.get('port'));
});
