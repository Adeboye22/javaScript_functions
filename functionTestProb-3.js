//changing a kebab to a snake case using regular expressions

function kebabToSnake(str) {

	//replace all '-' with "_"
	var newStr = str.replace(/-/g , "_");
	// return str
	return newstr;
}
