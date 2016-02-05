function RPNCalculator() {

	this.stack = [];

}

/*

Quick question about assigning all these methods to the prototype: 
could I just set the prototype to an object literal with all of these 
methods defined in one fell swoop? Seems like it'd be more DRY, but I'm 
not sure if that's a best practice.

*/

RPNCalculator.prototype.push = function(num) {

	this.stack.push(num);

}

RPNCalculator.prototype.value = function() {

	return this.stack[this.stack.length - 1];
	
}

RPNCalculator.prototype.checkStack = function() {

	if (this.stack.length < 2) {

		throw "rpnCalculator is empty";

	}
	
}

RPNCalculator.prototype.plus = function() {

	this.checkStack();

	this.stack.push(
		this.stack.pop() + this.stack.pop()
	);
	
}

RPNCalculator.prototype.minus = function() {

	this.checkStack();

	this.stack.push(
		(-1 * this.stack.pop()) + this.stack.pop()
	);
	
}

RPNCalculator.prototype.times = function() {

	this.checkStack();

	this.stack.push(
		this.stack.pop() * this.stack.pop()
	);
	
}

RPNCalculator.prototype.divide = function() {

	this.checkStack();

	this.stack.push(
		(1 / this.stack.pop()) * this.stack.pop()
	);
	
}