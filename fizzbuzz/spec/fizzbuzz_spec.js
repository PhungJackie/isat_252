// Test specification for the fizzbuzz program
var fb = require('../fizzbuzz');

describe("A program that implements fizzbuzz", function() {

	it("can count from 1 to 5", function() {
		expect(fb.count(1,5)).toBe("1 2 fizz 4 buzz");
	});

	it("can count from 1 to 7", function() {
		expect(fb.count(1,7)).toBe("1 2 fizz 4 buzz fizz 7");
	});

	it("can count from 3 to 9", function() {
		expect(fb.count(3,9)).toBe("fizz 4 buzz fizz 7 8 fizz");
	});

	it("can count from 5 to 10", function() {
		expect(fb.count(5,10)).toBe("buzz fizz 7 8 fizz buzz");
	});

	it("can count from 12 to 16", function() {
		expect(fb.count(12,16)).toBe("fizz 13 14 fizzbuzz 16");
	});
});