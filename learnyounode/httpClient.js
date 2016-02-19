var http = require('http'),
	url = process.argv[2],

	printString = function(string) {
		console.log(string);
	}

	callback = function(response) {
		response.setEncoding('utf8');
		response.on('data', printString);
	};

http.get(url, callback);