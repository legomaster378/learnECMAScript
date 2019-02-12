function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
  }

//creation
//let array=[1,2,3,4,5];

let array=[];

// set up an array of numbers
for(var i=0;i<getRandomInt(30);i++){
    array.push(getRandomInt(10));
}

// now array is populized 
//console.log (array);

// array has length
console.log (`Array length is ${array.length}`);

// iteration
// for(var index=0;index<array.length;index++){
//     console.log(`The item ${index} of array's value is ${array[index]}`);
// }

//use forEach
// ECMAScript 5 Version
// array.forEach(
//     function(value, index){
//         console.log(`The item ${index} of array's value is ${value}`);
//     }
// )

// ECMAScript 6 Version
array.forEach(
    (value, index) => {
        console.log(`The item ${index} of array's value is ${value}`);
    }
)

var person1 = {name:"Aaron", Age: 13, Books: ["No data of books, but sure that he reads a lot"]};
var person2 = {name:"Robin", Age: 5, Books: ["Dogman, assortments of nursery rhymes"]};
var people = [];
people.push(person1);
people.push(person2);

console.log(JSON.stringify(people));
console.log(`${people[1].name} is ${people[1].Age} years old, and likes to read ${people[1].Books.join(';')}` );