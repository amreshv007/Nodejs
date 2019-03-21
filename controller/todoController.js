var bodyParser = require('body-parser');
// var mongo = require('mongodb');
var mongoose = require('mongoose');
var assert = require('assert');
var mocha = require('mocha');
mongoose.Promise = global.Promise;

//connect to a database	
// before(function(done){
	mongoose.connect('mongodb://127.0.0.1/testing', { useNewUrlParser: true });
	mongoose.connection.once('open', function(){
	console.log('Connection is made successful!');
	}).on('error',function(){
		console.log('Connection failed!');
	});
// });

// create a schema
var todoSchema = new mongoose.Schema({
			item: String
	});
// Create model
var todo = mongoose.model('Todo', todoSchema);

// delete database's all items
todo.deleteMany({}, function(err,data){
	if(err) throw err;
	console.log("Data Deleted!");
});

module.exports = function(app){

	var urlencodedParser = bodyParser.urlencoded({ extended: false });

	app.get('/todo', function(req, res){
		// data from mongoDB
		todo.find({}, function(err, data){
			if(err) throw err;
			res.render('todofiles/todo',{todos:data});
		});
	});
	app.post('/todo', urlencodedParser, function(req,res){
		var d = req.body;
		todo(d).save(function(err){
			if(err) throw err;
			todo.find({}, function(err, data){
				if(err) throw err;
				res.render('todofiles/todo',{todos:data});
			});
		});
	});
};