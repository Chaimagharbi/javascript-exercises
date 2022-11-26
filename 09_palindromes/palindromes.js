const palindromes = function (string) {
  let ch = string
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .replace(/\s{1,}/g, "")
    .toLowerCase();

  let revch = ch.split("").reverse().join("");
  /*console.log(ch);
  console.log(revch);*/
  if (ch === revch) return true;
  return false;
};

//console.log(palindromes("Animal loots foliated detail of stool lamina."));
// Do not edit below this line
module.exports = palindromes;
