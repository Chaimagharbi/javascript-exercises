const removeFromArray = function (array, ...theArgs) {
  for (const arg of theArgs) {
    let ind = array.indexOf(arg);
    if (ind !== -1) {
      if (array.length === 0) {
        return;
      }
      array.splice(ind, 1);
    }
  }
  return array;
};
// Do not edit below this line
module.exports = removeFromArray;
