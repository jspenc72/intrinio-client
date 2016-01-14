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
//
	    return this.get('https://www.intrinio.com/api/companies?ticker='+ticker);
	  },
	  prices: function(ticker) {
// 
	    return this.get('https://www.intrinio.com/api/prices?ticker='+ticker);
	  },
	  historical_data: function(ticker) {
	    return this.get('https://www.intrinio.com/api/historical_data?ticker='+ticker);
	  },
	  companies: function(ticker) {
// 
	    return this.get('https://www.intrinio.com/api/companies?ticker='+ticker);
	  },
	  securities: function(ticker) {
// 
	    return this.get('https://www.intrinio.com/api/securities?ticker='+ticker);
	  },
	  indices: function(ticker) {
// Is returning an empty object.
	    return this.get('https://www.intrinio.com/api/indices?ticker='+ticker);
	  },
	  data_point: function(ticker, item) {
//
	    return this.get('https://www.intrinio.com/api/data_point?ticker='+ticker+"&item="+item);
	  },
	  historical_data: function(ticker, item) {
	    return this.get('https://www.intrinio.com/api/historical_data?ticker='+ticker+"&item="+item);
	  },
	  news: function(ticker) {	    
// 
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