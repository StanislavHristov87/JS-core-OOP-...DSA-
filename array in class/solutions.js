// const arr = [10, 1, 2, 0, 5, 3, 9, 4, 6, 8, 7];

// console.log(arr);
// arr.sort(function(a, b) {
//     return a - b;
// });

// console.log(arr);

// const people = ['Ivan', 'Maria', 'Stoyan', 'Petar', 'Iva'];
// console.log(people);
// let sortedPeople = [];
// // people.split('').sort().join(); // trqbva cikal da gi zavarti vsichki elementi
// for(const person of people) {

// let sortedPerson = person.split('').sort().join('');
// sortedPeople.push(sortedPerson);

// }
// console.log(sortedPeople);

// let colRow = 4;
// let arr = [];

// for(let i = 0; i < colRow; i++) {
//     let counter = 1;
//     arr[i] = [];
//     counter += i;

//     for(let j = 0; j < colRow; j++) {
//         if(j === 0) {
//         arr[i][j] = i + j + 1;
//         } else {
//             arr[i][j] = counter += colRow;
//     }
// }}
// console.log(arr);

const data = [
  {
    name: "John",
    age: 20,
    street: "Main",
    usable: ["name", "age"],
  },
  {
    first: 10,
    second: 12,
    third: 16,
    usable: ["first", "second"],
  },
];
const transfObj = (data) => {
  // your code starts here
  const transformedObject = {};
  const result = [];
  data.filter((obj) => {
    obj.usable.map((usbleEl) => Object.assign(transformedObject, usbleEl));
    result.push(transformedObject);
  })
  return result
// your code ends here
}
const result1 = transfObj(data);
console.log(result1);
