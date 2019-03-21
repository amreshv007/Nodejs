module.exports = function(app){

	var bodyParser = require('body-parser');

	var urlencodedParser = bodyParser.urlencoded({ extended: false });

	app.get('/', function(req, res){
		res.render('first_test/index');
	});

	app.get('/contact', function(req, res){
		res.render('first_test/contact');
	});

	app.post('/contact', urlencodedParser, function(req, res){
		res.render('first_test/contact-success', {data: req.body});
	});

	app.get('/profile', function(req, res){
		res.render('first_test/profile', {data: '', person:''});
	});

	app.get('/profile/:name', function(req, res){
		var data = {age:21,course:'node.js', hobbies:['Eating','Sleeping','Dancing']};
		res.render('first_test/profile', { person: req.params.name, data: data});
	});
};