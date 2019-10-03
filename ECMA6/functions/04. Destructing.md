# Destructing

Destructing extracts return data from arrays and objects.

## Array Destructing

```js
const getPresidentName = function(number) {
  //implemented only for number 6
  return ['John', 'Quincy', 'Adams'];
};

{
  const president6 = getPresidentName(6);
  const firstName = president6[0];
  const lastName = president6[2];
  console.log(`First name: ${firstName} Last name: ${lastName}`);
}

{
  const [firstName, middleName, lastName] = getPresidentName(6);
  console.log(`First name: ${firstName} Last name: ${lastName}`);
}

{
  const [firstName] = getPresidentName(6);
  console.log(`First name: ${firstName}`);
}

{
  const [firstName, , lastName] = getPresidentName(6);
  console.log(`First name: ${firstName} Last name: ${lastName}`);
}

{
  const [firstName, , lastName, nickName] = getPresidentName(6);
  console.log(nickName);
}

{
  const [
    firstName,
    ,
    lastName,
    nickName = 'Old Man Eloquent'
  ] = getPresidentName(6);
  console.log(nickName);
}

{
  const [firstName, ...otherParts] = getPresidentName(6);
  console.log(firstName);
  console.log(otherParts);
}

{
  let [a, b] = [1, 2];
  console.log(`a=${a} b=${b}`);
  [a, b] = [b, a];
  console.log(`a=${a} b=${b}`);
}

{
  const printFirstAndLastOnly = function([first, , last]) {
    console.log(`first ${first} last ${last}`);
  };

  printFirstAndLastOnly(['John', 'Q', 'Adams']);
}
```

## Object Destructing

```js
const weight = 'WeightKG';

const sam = {
  name: 'Sam',
  age: 2,
  height: 110,
  address: { street: '404 Missing St.' },
  shipping: { street: '500 NoName St.' },
  [weight]: 15,
  [Symbol.for('favoriteColor')]: 'Orange'
};

{
  const firstName = sam.name;
  const theAge = sam.age;
  console.log(`${firstName} ${theAge}`);
}

{
  const { name: firstName, age: theAge } = sam;
  console.log(`${firstName} ${theAge}`);
}

{
  const { name: firstName, age: theAge } = { name: 'Sam', age: 2, height: 110 };
  console.log(`${firstName} ${theAge}`);
}

{
  const { name, age: theAge } = sam;
  console.log(`${name} ${theAge}`);
}

{
  const { [weight]: wt, [Symbol.for('favoriteColor')]: favColor } = sam;
  console.log(`${wt} ${favColor}`);
}

{
  const { lat, lon, favorite = true } = { lat: 84.45, lon: -114.12 };
  console.log(`${lat} ${lon} ${favorite}`);
}

{
  const printInfo = function(person) {
    console.log(`${person.name} is ${person.age} years old`);
  };

  printInfo(sam);
}

{
  const printInfo = function({ name: theName, age: theAge }) {
    console.log(`${theName} is ${theAge} years old`);
  };

  printInfo(sam);
}

{
  const printInfo = function({ name, age }) {
    console.log(`${name} is ${age} years old`);
  };

  printInfo(sam);
}

{
  const {
    name,
    address: { street }
  } = sam;

  console.log(street);

  try {
    console.log(address);
  } catch (ex) {
    console.log(ex.message);
  }
}

{
  const {
    name,
    address: { street },
    shipping: { street: shipStreet }
  } = sam;

  console.log(`${street} ${shipStreet}`);
}

{
  let theName = '--';
  ({ name: theName } = sam);

  console.log(theName);
}
```

## Gotchas

```js
const sam = {
  name: 'Sam'
};

let theName = '--';
// { name: theName } = sam; //error
//({ name: theName } = sam;); //error
({ name: theName } = sam);

console.log(theName);
```

```js
const parker = {
  first: 'Peter',
  last: 'Parker',
  email: 'spiderman@superheroes.example.com'
};

// poor implementation which takes out email
// const addAge = function(person, theAge) {
//   return { first: person.first, last: person.last, age: theAge };
// };

console.log(addAge(parker, 15));

const addAge = function(person, theAge) {
  return { ...person, last: person.last.toUpperCase(), age: theAge };
};

console.log(addAge(parker, 15));
```
