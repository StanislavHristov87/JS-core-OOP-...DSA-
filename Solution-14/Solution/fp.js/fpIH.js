function greet(name) {
    let greeting = `Hi, ${name}`
    return greeting;
}
console.log(greet('Stan'));

const numbers = [1, 2, 3, 4, 5];
function fn(msg) {
    console.log(msg);
}
 
const forEach = (array, fn) => {
  // Your code goes here
  for (let el of array) {
   return console.log(fn(el));
  }
}

forEach(numbers, fn);