const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  let sum = 0;
  for (const arg of array) {
    sum += arg;
  }
  return sum;
};

const multiply = function (array) {
  let mul = 1;
  for (const arg of array) {
    mul *= arg;
  }
  return mul;
};

const power = function (x, pow) {
  let power = x;
  for (let i = 1; i < pow; i++) power *= x;
  return power;
};

const factorial = function (a) {
  let fact = 1;
  if (a === 1 || a === 0) return fact;
  for (let i = 2; i <= a; i++) fact *= i;
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
