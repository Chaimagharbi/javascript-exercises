const reverseString = function (string) {
  const myArray = string.split("");
  string = "";
  for (let i = myArray.length - 1; i >= 0; i--) {
    string += myArray[i];
  }
  return string;
};

// Do not edit below this line
module.exports = reverseString;
