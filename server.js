var express = require('express');
var app = express();

//Port No.
var port = process.env.PORT || 8080;
var cool = require('cool-faces-ascii');

//EJS, like HTML but not for some reason
app.set('view engine', 'ejs');

//Yo, the assets are here!
app.use(express.static(__dirname + '/public'));

//Home page route
app.get('/', function(request, response){
	//ejs render looks in view folder automagically
	response.render('index');
});

app.get('/ascii', function(request, response){
	response.send(cool());
})

app.listen(port, function(){
	console.log('App running on http://localhost:' + port);
});