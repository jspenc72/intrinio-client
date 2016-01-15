# intrinio-client
- SDK for interacting with the intrinio REST API

```js
var username = "" //Your Intrinio App Username
var password = "" //Your Intrinio App Password
var intrinio = require("intrinio-client")(username, password)

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

```

## Installation

```bash
$ npm install intrinio-client
```

## Features

  * Fast, easy configuration


## Docs & Community

  * [Website and Documentation](https://www.intrinio.com) - [[website repo](https://github.com/jspenc72/intrinio-client)]

## Goals
  * 100% Intrinio End Point Coverage

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
