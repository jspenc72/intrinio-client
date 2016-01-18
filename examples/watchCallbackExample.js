var username = "" //Your Username
var password = "" //Your Password
var intrinio = require("../index.js")(username, password)

var updateFrequency = 1005		//Duration between each request
var numberOfRequests = 5		//Send this number of requests 

//Traditional Callback Style 
intrinio
.watch
.prices('AAPL', updateFrequency, numberOfRequests, function(watcher){
	watcher
	.on('update', function(data, response){
		console.log(data)					//data is the response from the Intrinio API	
		// console.log(response)			//response is the http response
	})
	.on('error', function(data, response){
		console.log(data)					//data is the response from the Intrinio API	
		// console.log(response)			//response is the http response
	})	
})