
function greet(name) {
	return `Hi, ${name}`;
}

console.log(greet("Alex"))

/*
EXPECTED BEHAVIOR:
console.log(greet("Alex"))
> Hi, Alex

console.log(greet("John"))
> Hi, John

*/

// ----------------------------

let name = 'Alex';

function greet_impure() {
	name = "Alice";
	return name;
}

console.log(greet_impure())


// JavaScript Closure Live Demo
function createCounter(initialValue = 0) {
	let counter = initialValue;

	const increment = function (step = 1) {
		counter += step;



		return counter;
	}

	const decrement = function (step = 1) {
		counter -= step;

		return counter;
	}

	return {
		increment,
		decrement
	};
}

const numbers = [1, 2, 3, 4, 5];

const forEach = (array, fn) => {
	return array.map(x => fn(x));
	// for (let i = 0; i < array.length; i++) {
	// 	fn(array[i]); 
	// }
}

const result = forEach(numbers, x => x * 2);
console.log(numbers);
console.log(result);
// console.log(numbers);


/*
  EXPECTED BEHAVIOR:
  > 1
	2
	3
	4
	5
  */