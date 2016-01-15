# intrinio-client
- Unnoficial SDK for interacting with the intrinio REST API

```js
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

//Available Endpoints

intrinio.prices('AAPL')
intrinio.historical_data('AAPL')
intrinio.companies('AAPL')
intrinio.securities('AAPL')
intrinio.indices('AAPL')
intrinio.data_point('AAPL')
intrinio.historical_data('AAPL')
intrinio.news('AAPL')

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

## Quick Start

  Create the app:

```bash
$ mkdir newApp
$ cd newApp
$ npm init 
```

  Install dependencies:

```
$ npm install --save intrinio-client
```


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

The original author of The original author of Intrinio-Client is [@Jspenc72](https://github.com/jspenc72)
## License

  [MIT](LICENSE)
