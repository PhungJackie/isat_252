// tell the spec where to find our code
var math = require('../math');

describe("A simple arithmetic program", function() {

  it("can add two numbers", function() {
    expect(math.add(3,5)).toBe(8);
    expect(math.add(3.2,5.7)).toBe(8.9);
    expect(math.add(-3,5)).toBe(2);
    expect(math.add(3.2,-5.7)).toBe(-2.5);
  });

  it("can subtract two numbers", function() {
    expect(math.subtract(3,5)).toBe(-2);
    expect(math.subtract(3.5,5)).toBe(-1.5);
  });

  it("can multiply two numbers", function() {
    expect(math.multiply(3,5)).toBe(15);
    expect(math.multiply(3,0)).toBe(0);
    expect(math.multiply(3.3,5)).toBe(16.5);
  });

  it("can divide two numbers", function() {
    expect(math.divide(15,5)).toBe(3);
    expect(math.divide(15,0)).toBe("Error! Division by zero."); // ????
  });
  
});
