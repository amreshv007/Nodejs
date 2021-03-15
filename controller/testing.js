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

	// LG WebApps Assignment
	app.get('/team-outing', function(req,res){
		res.render('LG_Team_Outing/index');
	});
	app.get('/team-outing/signup', function(req,res){
		res.render('partials/signup');
	});
	app.get('/team-outing/outing-data', function(req,res){
		res.render('LG_Team_Outing/outing_data_form');
	});
	app.get('/team-outing/outing-data/form', function(req,res){
		res.render('LG_Team_Outing/outing_form');
	});
};

