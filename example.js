var username = "6228032fc25b59e3363e75bacc6a3960"
var password = "2d430177512f8414445162122a70c921"
var intrinio = require("./index.js")(username, password)
intrinio
.ticker('AAPL')
.on('complete', function(data, response) {
	if(response.statusCode==404){
		console.log("Not found")
	}else if(response.statusCode==200){
		console.log("Everything is OK!")
	}
});