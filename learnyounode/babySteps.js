var args = process.argv.slice(2);

console.log(args.reduce(function(sum, nextTerm) {
	return sum + Number(nextTerm);
}, 0));