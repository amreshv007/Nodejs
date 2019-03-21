var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.use('/assets', express.static('public'));

var todoController = require('./controller/todoController');

var testing = require('./controller/testing');

todoController(app);

testing(app);

app.listen(3000);
console.log('3000 port is listening...');
