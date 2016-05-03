exports.count = function(start, end) {
	// initialize the output variable
	if (0 === start%3)
		output = "fizz";
	else if (0 === start%5)
		output = "buzz";
	else if (0 === start%15)
		output = "fizzbuzz";
	else
		var output = start;

	// modify output to contain the desired sequence
	for (var counter = start; counter < end; counter += 1) {
		// stuff here gets repeated
		if (14 === counter%15)
			output = output + " fizzbuzz";
		else if (2 === counter%3)
			output = output + " fizz";
		else if (4 === counter%5)
			output = output + " buzz";
		else 
			output = output + " " + (counter + 1);
	}
	// return the output, e.g. "1 2 3 4 5"
	return output;
}; 