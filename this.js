//printReverse()
	function printReverse (input) {
		var a = [];
		for (var i = input.length-1; i >= 0; i--) {
			a.push(input[i]);
		};
		return a;
	}

//isUniform()
	function isUniform(input) {
		for (var i = 1; i < input.length; i++) {
			if(input[i] !== input[0]) {
				return false;
			}
			return true;
		};
	}
//sumArray()
	function sumArray(input) {
		var a = 0;
		for (var i = 0; i < input.length; i++) {
			a += input[i]
		};
		return a;
	}
//max()
	function max(input) {
		var a = input[0]
		for (var i = 1; i < input.length; i++) {
			if (input[i] > a) {
				a = input[i];
			}
		}
		return a;
	}