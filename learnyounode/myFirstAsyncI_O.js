var fs = require('fs'),
	filePath = process.argv[2],

	logNumOfLines = function(err, string) {
		console.log(string.split('\n').length - 1);
	};

fs.readFile(filePath, 'utf8', logNumOfLines);