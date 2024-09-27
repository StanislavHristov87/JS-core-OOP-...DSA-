// ***FILTER***

// let numbers = [1, 2, 3, 4, 8, 9, 10, 11, 12, 13, 14, 15];

// const evens = numbers.filter((num) => num % 2 === 0);

// console.log(evens);

// const people = ['Alice', 'Bob', 'Charlie', 'Derek', 'Edith', 'Eva'];

// const nameStartsWithE = people.filter((person) => person.startsWith('E'));

// console.log(nameStartsWithE);

// Practice several basic tasks for filter

// Filter all the numbers which are less than 5 or larger than 15.
// Example: [1,15,2,8,31,5,9] -> [1,2,31]

// let numbers = [1, 15, 2, 8, 31, 5, 9];

// const lessThan5 = numbers.filter((num) => num < 5 || num > 15);
// console.log(lessThan5);



// Filter all the strings which longer than 5 symbols.
// Example: ['cat', 'dog', 'elephant', 'cucumber'] -> ['elephant', 'cucumber']

// let strings = ['cat', 'dog', 'elephant', 'cucumber'];

// const lengthMore5 = strings.filter(str => str.length > 5);
// console.log(lengthMore5);


// Filter all the strings that include a certain substring.
// Example: ['cat', 'dog', 'duck', 'cucumber'], 'uc' -> ['duck', 'cucumber']

//  let strings = ['cat', 'dog', 'duck', 'cucumber'];
//     let subStr = 'uc';
//     const isIncludSubStr = strings.filter(str => str.includes(subStr));
//     console.log(isIncludSubStr);


// Create an array of users { username: string, password: string } 
// and filter all the users that have strong passwords.
//  A 'strong' password means one lowercase, 
// one uppercase, one digit and at least 8 symbols long.

// let users =  [ { name: 'Alice', password: 'TelerikAJ55'}, { name: 'Bob', password: 'telerikAJ55'}, 
// { name: 'Charlie', password: 'TelerikAJ57'}, { name: 'Derek', password: 'Telerik'}, { name: 'Edith', password: 'Telerik' } ];

// const strongPasswords = users.filter((user) => user.password.length >= 8 && user.password.match(/[a-z]/) && user.password.match(/[A-Z]/) && user.password.match(/[0-9]/));

// console.log(strongPasswords);



// *** MAP ***


// Solve each of the following tasks by using map.


// Some of the transformations might be difficult to express on a single line, so remember that you can always write code like this:

// const myTransformationFunc = input => {
 
//   return // the transformed output
// }
 
// let result = collection.map(e => myTransformationFunc(e));
// // or
// result = collection.map(myTransformationFunc);


// Double each number in an array of numbers.
// Example: [1,2,3,4] -> [2,4,6,8]

let numbers = [1, 2, 3, 4];

const doubled = numbers.map((n) => n * 2);
console.log(doubled);

// Uppercase each string in an array of strings.
// Example: ['cat', 'dog'] -> ['CAT', 'DOG']

// let strings = ['cat', 'DOG'];

// const upperCace = strings.map((str) => str.toUpperCase());
// console.log(upperCace);


// // Transform each string to the opposite case.
// // Example: ['cat', 'DOG'] -> ['CAT', 'dog']

// const oposCase = strings.map((str) => str === str.toUpperCase() ? str.toLowerCase() : str.toUpperCase());
// console.log(oposCase);


// Normalize each string. Normalization means taking a string containing any case letters and making it capitalized.
// Example: ['eLepHANT', 'CucuMbeR'] -> ['Elephant', 'Cucumber']

// let strings = ['eLepHANT', 'CucuMbeR'];

// const normalize = strings.map(str => str[0].toUpperCase() + str.slice(1).toLowerCase());
// console.log(normalize);


// Create a function getBookInfo that returns a string with information about a book and apply it on a collection of books.
// Book: { title: string, author: string, pages: number }
// The bookInfo result string is up to you, but it must contain the title, the author and the pages.




const books = [
 {title: '1984', author: 'George Orwell', pages: 328},
 {title: 'Fahrenheit 451', author: 'Ray Bradbury', pages: 256},
 {title: 'Brave New World', author: 'Aldous Huxley', pages: 311},
 {title: 'The Handmaid\'s Tale', author: 'Margaret Atwood', pages: 311},
];

const getBookInfo = (book) => {
   const result = book.map((b) => b.title + ', ' + b.author + ', ' + b.pages);
   return result;
}
 const output = getBookInfo(books);
 console.log(output);
 
// // example result
// /*
// [
//  '1984, George Orwell, 328',
//  'Fahrenheit 451, Ray Bradbury, 256',
//  'Brave New World, Aldous Huxley, 311',
//  "The Handmaid's Tale, Margaret Atwood, 311"
// ]
// */
// Map each user in a collection to an HTML template. The HTML template should look like the example below. The three placeholders should give you an idea what information the user object should hold.

// <div>
//   <h3>{firstName} {lastName}</h3>
//   <em>Member since {registeredDate}.</em>
// </div>
// // Example result
// /*
// [
//   '<div>\n' +
//     '    <h3>Pesho Ivanov</h3>\n' +
//     '    <em>Member since 13.03.2020.</em>\n' +
//     '  </div>',
//   '<div>\n' +
//     '    <h3>Gosho Ivanov</h3>\n' +
//     '    <em>Member since 10.11.1989.</em>\n' +
//     '  </div>',
//   '<div>\n' +
//     '    <h3>Penka Ivanova</h3>\n' +
//     '    <em>Member since 01.01.2000.</em>\n' +
//     '  </div>'
// ]    
//  */