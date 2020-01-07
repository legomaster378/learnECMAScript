"use strict";
const greetwith = (greeting, ...names) => {
  names.forEach(name => console.log(greeting + " " + name + ", you know that you suck right?"))
}
greetwith('Hey', 'Robin', 'Aaron', 'Dad', 'Mom');
