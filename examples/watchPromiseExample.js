var username = "" //Your Username
var password = "" //Your Password
var intrinio = require("../index.js")(username, password)

var updateFrequency = 1005		//Duration between updating prices in milliseconds
var numberOfRequests = 5		//Stop after this number of requests 

//Promise Style 
intrinio
.watch
.prices('AAPL', updateFrequency, numberOfRequests)
.then(function(watcher){
	watcher
	.on('update', function(data, response){
		console.log(data)					//data is the response from the Intrinio API	
		// console.log(response)				//response is the http response
	})
	.on('error', function(data, response){
		console.log(data)					//data is the response from the Intrinio API	
		// console.log(response)				//response is the http response
	})	
})
.catch(function(err){
	console.error(err)
})
.finally(function(res){
	console.log(res)
})