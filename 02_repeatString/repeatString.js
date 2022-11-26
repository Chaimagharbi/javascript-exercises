const repeatString = function (string, num) {
  let chaine = string;
  if (num === 0) return "";
  else if (num < 0) return "ERROR";
  for (let i = 0; i < num - 1; i++) {
    string += chaine;
  }
  return string;
};

// Do not edit below this line
module.exports = repeatString;
