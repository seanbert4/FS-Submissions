function createCalculator() {

	return {

		accumulator: 0,

		value: function() {

			return this.accumulator;

		},

		add: function(num) {

			this.accumulator += num;

		},

		subtract: function(num) {

			this.accumulator -= num;

		}

	}

}