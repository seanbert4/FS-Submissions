function repeat(string, num) {

	var result = "";

	while (num > 0) {

		result += string;

		num--;

	}

	return result;

}

function sum(array) {

	return array.length ? 
		
		array.reduce(function(sum, next) {

			return sum + next;

		}, 0):

	0;

}

function gridGenerator(num) {

	var result = "";

	for (var i = 0; i < num; i++) {

		for (var j = 0; j < num; j++) {

			result += ((i + j) % 2 === 1) ? " " : "#";

		}

		result += "\n"

	}

	return result;

}

function join(array, delimiter) {

	delimiter = delimiter || "";

	return array.length ? 
	
		array.reduce(function(string, next) {

			return string + delimiter + next;

		}):

	"";

}

function paramify(obj) {

	var result = [];

	for (var key in obj) {

		if (obj.hasOwnProperty(key)) {

			result.push(key + "=" + obj[key]);
			
		}

	}

	result.sort();

	return join(result, "&");

}