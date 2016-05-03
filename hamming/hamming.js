//var compute;

// this is a function that takes two strands
// of nucleotides and uses them to compute
// the hamming distance
exports.compute = function(str1, str2) {
	var dna1 = str1;
	var dna2 = str2;
	var diff = 0;

	if (dna1.length !== dna2.length)
		throw new Error("DNA strands must be of equal length.");
	for (var counter = 0; counter < dna1.length; counter += 1) {
		if (dna1.charAt(counter) !== dna2.charAt(counter))
			diff += 1;
	}
	return diff;
}

//module.exports = {
//	compute: compute
//}