const person1 = {
  name: "Aaron",
  Age: 13,
  Books: ["No data of books, but sure that he reads a lot"],
};
const person2 = {
  name: "Robin",
  Age: 5,
  Books: ["Dogman, assortments of nursery rhymes"],
};
const people = [];
people.push(person1);
people.push(person2);

console.log(JSON.stringify(people));
console.log(`${people[1].name} is ${people[1].Age} years old, and likes to read ${people[1].Books.join("")}`);
