//declare a function

/*
 * function factorial(num) {
	if(num === 0 || num === 1) {
		return 1;
	} for (var i = num - 1; i >= 1; i--) {
		num *= i;
	}
	return num;
}
*/

//define a function factorial
function factorial(num) {
	//set a variable at 1
	var result = 1;
	//run a loop to multiply the variable
	for (var i = 2; i <= num; i++){
		result *= i;
	}
	//return value
	return result;
}
