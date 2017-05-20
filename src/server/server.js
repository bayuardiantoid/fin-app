'use strict';

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const favicon = require('favicon')
const logger = require('morgan')


const path = require('path')
const http = require('http')
const port = 8080;


console.log(path.join(__dirname, '../client'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use('/api/*', require('./routes'));
app.use(express.static(path.join(__dirname, '../client')));
app.all('/*', (req, res, next) => {
	// Just send the index.html for other files to support HTML5Mode
	console.log('Incoming request:', req.path);
	res.sendFile('index.html', {
		root : path.join(__dirname, '../client')
	});
});

app.use( (err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send('Internal server error', {
		error : err.message,
		stack : err.stack
	});
});

app.set('port', process.env.PORT || port);
http.createServer(app).listen(app.get('port'), () => {
	console.log('Express server listening on port ' + app.get('port'));
});
