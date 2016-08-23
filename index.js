var express = require('express');
var app = express();
var events = require('events');
var eventEmitter = new events.EventEmitter();
var couch = require('nano')('http://localhost:5984');
var jsdom = require('jsdom');
var http = require('http');
var sys = require('sys');
var fs = require('fs');
var session = require('client-sessions');
app.use(express.static(__dirname + '/public'));
const server = require('http').createServer(app);
const io = require('socket.io').listen(server); 
app.use(express.bodyParser());
// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
				response.render('pages/index');
				});


app.get('/register', function(request, response) {
				response.render('pages/register');
				});

