function setPropertiesOnObjLiteral(obj) {

	obj.x = 7;

	obj["y"] = 8;

	obj.onePlus = function(num) {

		return num + 1;

	}

}

function setPropertiesOnArrayObj(arr) {

	arr.hello = function() {

		return "Hello!";

	};

	arr["full"] = "stack";

	arr.push(5);

	arr.twoTimes = function(num) {

		return num * 2;

	}

}

function setPropertiesOnFunctionObj(func) {

	func.year = 2015;

	func.divideByTwo = function(num) {

		return num / 2;

	}

	func.prototype.helloWorld = function() {

		return "Hello World";
		
	}

}
