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

// const data = [
//   {
//     name: "John",
//     age: 20,
//     street: "Main",
//     usable: ["name", "age"],
//   },
//   {
//     first: 10,
//     second: 12,
//     third: 16,
//     usable: ["first", "second"],
//   },
// ];
// const transfObj = (data) => {
//   // your code starts here

//   return data.map((obj) => {
//     return obj.usable.reduce((transformedObject, usbleEl) => {
//        transformedObject[usbleEl] = obj[usbleEl];
//        return transformedObject;
//      },{});

//    })

// // your code ends here
// }
// const result1 = transfObj(data);
// console.log(result1);

const data = {
  cities: [
    {
      id: 1,
      name: "Plovdiv",
    },
    {
      id: 2,
      name: "Sofia",
    },
    {
      id: 3,
      name: "Varna",
    },
  ],
  people: [
    {
      name: "Peter",
      city: 2,
    },
    {
      name: "Marry",
      city: 1,
    },
    {
      name: "John",
      city: 3,
    },
    {
      name: "George",
      city: 3,
    },
    {
      name: "Anika",
      city: 1,
    },
  ],
};

// name: 'Peter',
//     city: {
//       name: 'Sofia',
//       population: 1,
//     },

//const objCity = data.cities.map((c) => {
// for(const obj of data.people){
const peopleObj = (data) => {
  // your code starts here
  // city ima imeto na grada i id na grada i na choveka savpadat
  // your code ends here
  return data.people.map((person) => {
    let transfObj = {};
    const cityObj = {};
    const output = [];
    transfObj.name = person.name;
    transfObj.city = cityObj;

    data.people.map((p) => {
      for (const key of data.cities) {

        
        if (p.city === key.id) {
          transfObj.city.name = key.name;
          output.push(transfObj);
          //transfObj = {};
          break;
        }
      }
      
    });

    return output;
  });

  // data.cities.reduce((cityObj, currCity) => {

  //   return  data.people.filter((p) => {
  //     if(currCity.id === p.city) {

  //       cityObj.name = currCity.name;

  //      }
  //      return cityObj
  //   })

  // }, {})

  // debugger;

  // expected return
  // kolekciq ot people transformiran da vklyuchva :
  //person name, person city ne id a,
  // obekt s imeto na grada i populaciqta- kolko choveka jiveqt
};
const result = peopleObj(data);
console.log(result);
