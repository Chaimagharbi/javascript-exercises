const fibonacci = function (member) {
  if (+member < 0) return "OOPS";
  let y = 0,
    x = 1,
    mem = Math.floor(+member / 2);
  for (let i = 0; i < mem; i++) {
    y += x;
    x += y;
  }
  return +member % 2 === 0 ? y : x;
};
//console.log(fibonacci(13));
// Do not edit below this line
module.exports = fibonacci;
