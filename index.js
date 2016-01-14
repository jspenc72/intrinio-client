var rest = require('restler');
module.exports = function (username, password) {
	'use strict';

	var Intrinio = rest.service(function(u, p) {
	  this.defaults.username = u;
	  this.defaults.password = p;
	}, {
	  baseURL: 'https://www.intrinio.com/api'
	}, {
	  ticker: function(ticker) {
	    return this.get('https://www.intrinio.com/api/companies?ticker='+ticker);
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