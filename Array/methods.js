

// const array = [1, 4, 2, 3,4, 6, 1, 8, 11];

// array.sort();   // sort the array  
// console.log(array);

// array.reverse();    // reverse the array

// console.log(array);
// array.push(100);    // add element at the end
// console.log(array);

// array.pop();    // remove last element
// console.log(array); 

// array.shift(); // remove first element
// console.log(array); 

// array.unshift(100); // add element at the beginning
// console.log(array); 

//  array.splice(2, 3, [200, 3, 5]); // remove 3 elements starting from index 2 and add 3 elements
//  console.log(array); 

// array.forEach((element) => {
   
//     if(Array.isArray(element)) {
//         console.log('Array found');
        
//         console.log(array);
//     }
//     console.log(element);
// } );

// array.splice(2, 3); // remove 3 elements starting from index 2

// console.log(array);

const array = [1, 4, 2, 3,4, 6, 1, 8, 11];
let newArr = [];
let newArr2 = [];

const result = array.every((element) => {
    // Add your condition here
    if (element > 3) {
        return newArr.push(element);
    }
    // Return true or false based on the condition
    return newArr2.push(element);
});

console.log(result);
console.log(newArr);
console.log(newArr2);
