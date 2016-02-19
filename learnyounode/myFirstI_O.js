var fs = require('fs'),
	filePath = process.argv[2],
	string = fs.readFileSync(filePath).toString(),
	array = string.split('\n');

console.log(array.length - 1);





