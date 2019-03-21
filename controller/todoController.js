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
// var itemOne = todo({item:'Get some keys!'}).save(function(err){
// 	if(err) throw err;
// 	console.log('item saved');
// });
// mongoose.model.findOneAndRemove = new todo();
// mongoose.connection.collections.findOneAndRemove({item:'Get some keys!'});

module.exports = function(app){

	app.get('/todo', function(req, res){
		// data from mongoDB
		todo.find({}, function(err, data){
			if(err) throw err;
			res.render('todofiles/todo',{todos:data});
		});
	});
};