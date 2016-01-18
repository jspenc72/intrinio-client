var rest = require('restler');
var Promise = require("bluebird");

const EventEmitter = require('events');
const util = require('util');
function ResultEmitter() {
  EventEmitter.call(this);
}
util.inherits(ResultEmitter, EventEmitter);

module.exports = function (username, password) {
	'use strict';
	var Intrinio = rest.service(function(u, p) {
	  this.defaults.username = u;
	  this.defaults.password = p;
	}, {
	  baseURL: 'https://www.intrinio.com/api'
	}, {
		watch: {
			prices: function(ticker, frequency, numRequests, callback){
				var reqCounter = 0;
				var numberOfRequests = numRequests ? numRequests : 1 
				var url = 'https://www.intrinio.com/api/prices?ticker='+ticker
				if(callback){
						const resEmitter = new ResultEmitter();
						callback(resEmitter)

						function getUpdate(){
							var watcher = setTimeout(function(){
								console.log("Watching ticker"+ ticker + " " +frequency+" "+reqCounter)
								rest.get(url, {username:username, password:password})
								.on('complete', function(data, response) {
									if(response.statusCode==200){
										resEmitter.emit('update', data, response);
									}else{
										resEmitter.emit('error', data, response);
									}
								})

								if(reqCounter<numberOfRequests-1){
									getUpdate();
									reqCounter++
								}
							}, frequency)	
						}
						getUpdate();
				}else{
					return new Promise(function(resolve, reject) {
						//The object to be returned in the promise.
						const resEmitter = new ResultEmitter();

						rest.get(url, {username:username, password:password})
						.on('complete', function(data, response) {
							if(response.statusCode==200){
								resolve(resEmitter)
								resEmitter.emit('update', data, response);
							}else{
								resolve(resEmitter)
								resEmitter.emit('error', data, response);
							}
						})
						reqCounter++
						function getUpdate(){
							var watcher = setTimeout(function(){
								console.log("Watching ticker"+ ticker + " " +frequency+" "+reqCounter)
								rest.get(url, {username:username, password:password})
								.on('complete', function(data, response) {
									if(response.statusCode==200){
										resEmitter.emit('update', data, response);
									}else{
										resEmitter.emit('error', data, response);
									}
								})

								if(reqCounter<numberOfRequests){
									getUpdate();
									reqCounter++
								}
							}, frequency)	
						}
						getUpdate();
					})					
				}
			}
		},
		ticker: function(ticker) {
			return this.get('https://www.intrinio.com/api/companies?ticker='+ticker);
		},
		prices: function(ticker) {
			return this.get('https://www.intrinio.com/api/prices?ticker='+ticker);
		},
		historical_data: function(ticker) {
			return this.get('https://www.intrinio.com/api/historical_data?ticker='+ticker);
		},
		companies: function(ticker) {
			return this.get('https://www.intrinio.com/api/companies?ticker='+ticker);
		},
		securities: function(ticker) {
			return this.get('https://www.intrinio.com/api/securities?ticker='+ticker);
		},
		indices: function(ticker) {
			// Is returning an empty object.
			return this.get('https://www.intrinio.com/api/indices?ticker='+ticker);
		},
		data_point: function(ticker, item) {
			return this.get('https://www.intrinio.com/api/data_point?ticker='+ticker+"&item="+item);
		},
		historical_data: function(ticker, item) {
			return this.get('https://www.intrinio.com/api/historical_data?ticker='+ticker+"&item="+item);
		},
		news: function(ticker) {	    
			return this.get('https://www.intrinio.com/api/news?ticker='+ticker);
		}
	});
	if(!username || !password){
		console.log("No password provided. Using intrinio Dev Account Limit 500 req / day");
		var username = ""
		var password = ""		
	}
	var client = new Intrinio(username, password);
	return client
}