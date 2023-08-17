const add = function(num1,num2) {
	return num1+num2;
};

const subtract = function(num1,num2) {
	return num1-num2;
};

const sum = function(arr) {
  return arr.reduce((acc,item)=>acc+=item,0);
};

const multiply = function(arr) {
  return arr.reduce((acc,item)=>acc*=item);
};

const power = function(base,exponent) {
  return Math.pow(base,exponent);
};

const factorial = function(num) {
	if(num===0) return 1;
  return factorial(num-1)*num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
