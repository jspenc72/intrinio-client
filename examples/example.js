var username = "" //Your Username
var password = "" //Your Password
var intrinio = require("../index.js")(username, password)

intrinio
.ticker('AAPL')
.on('complete', function(data, response) {
	if(response.statusCode==404){
		console.log("Not found ticker")
	}else if(response.statusCode==200){
		console.log("Everything is OK with .ticker!")
	}
	console.log(data)
});

intrinio
.prices('AAPL')
.on('complete', function(data, response) {
	if(response.statusCode==404){
		console.log("Not found prices")
	}else if(response.statusCode==200){
		console.log("Everything is OK with .prices!")
	}
	console.log(data)
});


intrinio
.historical_data('AAPL')
.on('complete', function(data, response) {
	if(response.statusCode==404){
		console.log("Not found historical_data")
	}else if(response.statusCode==200){
		console.log("Everything is OK with .historical_data!")
	}
	console.log(data)
});


intrinio
.companies('AAPL')
.on('complete', function(data, response) {
	if(response.statusCode==404){
		console.log("Not found companies")
	}else if(response.statusCode==200){
		console.log("Everything is OK with .companies!")
	}
	console.log(data)
});


intrinio
.securities('AAPL')
.on('complete', function(data, response) {
	if(response.statusCode==404){
		console.log("Not found securities")
	}else if(response.statusCode==200){
		console.log("Everything is OK with .securities!")
	}
	console.log(data)
});

intrinio
.indices('AAPL')
.on('complete', function(data, response) {
	if(response.statusCode==404){
		console.log("Not found indices")
	}else if(response.statusCode==200){
		console.log("Everything is OK with .indices!")
	}
	console.log(data)
});


intrinio
.data_point('AAPL')
.on('complete', function(data, response) {
	if(response.statusCode==404){
		console.log("Not found data_point")
	}else if(response.statusCode==200){
		console.log("Everything is OK with .data_point!")
	}
	console.log(data)
});

intrinio
.historical_data('AAPL')
.on('complete', function(data, response) {
	if(response.statusCode==404){
		console.log("Not found historical_data")
	}else if(response.statusCode==200){
		console.log("Everything is OK with .historical_data!")
	}
	console.log(data)
});

intrinio
.news('AAPL')
.on('complete', function(data, response) {
	if(response.statusCode==404){
		console.log("Not found news")
	}else if(response.statusCode==200){
		console.log("Everything is OK with .news!")
	}
	console.log(data)
});
