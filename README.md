[![Intrinio Logo](https://s3.amazonaws.com/intrinio-production/images/Intrinio+Logo/IntrinioLogo-Green-optimized.png)](http://www.intrinio.com)

# intrinio-client
- **Unofficial** NodeJS SDK for [Intrinio](http://www.intrinio.com)
- The most affordable and flexible financial data on the market.

## Quick Start

  Create the app:

```bash
$ mkdir newApp
$ cd newApp
$ npm init 
```

  Install intrinio-client as a dependency:

```
$ npm install --save intrinio-client
```

  Example Use

```js
//index.js
var username = "" //Your Intrinio App Username
var password = "" //Your Intrinio App Password
var intrinio = require("intrinio-client")(username, password)

intrinio
.ticker('AAPL')			//All endpoints follow this pattern
.on('complete', function(data, response) {
	//data is the response from the Intrinio API
	//response is the http response
	if(response.statusCode==404){
		console.log("Not found")
	}else if(response.statusCode==200){
		console.log(data)
	}
});

```
  Using "watch"

```js
var username = "" //Your Username
var password = "" //Your Password
var intrinio = require("../index.js")(username, password)

var updateFrequency = 5000    //Duration between each request
var numberOfRequests = 5      //Send this number of requests 

//Traditional Callback Style 
intrinio
.watch
.prices('AAPL', updateFrequency, numberOfRequests, function(watcher){
  watcher
  .on('update', function(data, response){
    //Gets fired 5 times each one 5 seconds after the previous update.
    console.log(data)         //data is the response from the Intrinio API  
    console.log(response)     //response is the http response
  })
  .on('error', function(data, response){
    console.log(data)         //data is the response from the Intrinio API  
    console.log(response)     //response is the http response
  })  
})

//Be careful, 'watch' will easily use up your daily quota if a large number of requests are sent.

```

* [API Endpoints](http://community.intrinio.com/docs/api/)

```js
//Available Endpoints
```
* [Prices](http://community.intrinio.com/docs/api/#Prices)

```js
intrinio.prices('AAPL')
.on('complete', function(data, response) {

});
```

* [Companies](http://community.intrinio.com/docs/api/#Companies)

```js

intrinio.companies('AAPL')
.on('complete', function(data, response) {

});

```

* [Securities](http://community.intrinio.com/docs/api/#Securities)

```js

intrinio.securities('AAPL')
.on('complete', function(data, response) {

});

```

* [Indices](http://community.intrinio.com/docs/api/#Indices)

```js

intrinio.indices('AAPL')
.on('complete', function(data, response) {

});

```

* [Data Point](http://community.intrinio.com/docs/api/#Data_Point)

```js

intrinio.data_point('AAPL')
.on('complete', function(data, response) {

});

```

* [Historical Data](http://community.intrinio.com/docs/api/#Historical_Data)

```js

intrinio.historical_data('AAPL')
.on('complete', function(data, response) {

});

```
* [Company News](http://community.intrinio.com/docs/api/#Company_News)

```js

intrinio.news('AAPL')
.on('complete', function(data, response) {

});
```

## Installation

```bash
$ npm install intrinio-client
```

## Features

  * Fast, easy configuration


## Docs & Community

  * [Website and Documentation](https://www.intrinio.com) - [[website repo](https://github.com/jspenc72/intrinio-client)]
  * [NPM](https://www.npmjs.com/package/intrinio-client)

## Goals
  * 100% Intrinio End Point Coverage (Currently ~40%)

## Examples

  To view the examples, clone the 

```bash
$ git clone git://github.com/jspenc72/intrinio-client.git --depth 1
$ cd intrinio-client
$ npm install
```

  Then run whichever example you want:

```bash
$ node examples/example.js
```

## Tests

  To run the test suite, first install the dependencies, then run `npm test`:

```bash
$ npm install
$ npm test
```

## People

The original author of Intrinio-Client is [@Jspenc72](https://github.com/jspenc72)
## License

  [MIT](LICENSE)
