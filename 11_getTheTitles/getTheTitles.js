const getTheTitles = function (array) {
  let arrayTitle = [];
  return array.map((book) => (arrayTitle[arrayTitle.length] = book.title));
};
const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
];
//console.table(getTheTitles(books));
// Do not edit below this line
module.exports = getTheTitles;
