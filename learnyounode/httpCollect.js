var http = require('http'),
	url = process.argv[2],

	respond = function(response) {
		var data = '';
		response.setEncoding('utf8');
		response.on('data', function(string) {
			data += string;
		});
		response.on('end', function() {
			console.log(data.length);
			console.log(data);
		});
	};

http.get(url, respond);

