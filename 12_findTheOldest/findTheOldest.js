const findTheOldest = function (array) {
  array.map((person) => {
    if ("yearOfDeath" in person) {
      person["age"] = person.yearOfDeath - person.yearOfBirth;
    } else {
      person["age"] = new Date().getFullYear() - person.yearOfBirth;
    }
  });
  const max = Math.max(...array.map((person) => person["age"]));
  return array.find((person) => person.age === max);
};
/*const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];
console.log(findTheOldest(people));*/
// Do not edit below this line
module.exports = findTheOldest;
