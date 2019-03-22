var express = require('express');

var app = express();

// We are using ejs view engine by keeping view files as .html
var path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/assets', express.static('public'));

var todoController = require('./controller/todoController');

var testing = require('./controller/testing');

todoController(app);

testing(app);

app.listen(3000);
console.log('3000 port is listening...');
