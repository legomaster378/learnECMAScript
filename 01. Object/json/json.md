# JSON

> JavaScript Object Notation is an open-standard file format or data interchange format that uses human-readable text to transmit data objects consisting of attribute–value pairs and array data types.

JSON pass data between functions. UI can be rendered from JSON.

JSON pass data to remote server.

```js
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
```

## text / string between servers

## text / string to from JavaScript objects JSON.parse and JSON.stringfy
