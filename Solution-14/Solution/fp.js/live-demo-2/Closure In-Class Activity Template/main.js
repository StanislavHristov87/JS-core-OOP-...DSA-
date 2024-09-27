// import { byKey, findBy, isBetween, isHigher, isLower, startsWith } from './utils.js';
import people from './people.js';

// const sorted = people.sort(byKey('age', 'desc')); ✅
// console.log(sorted);

// const result = people.find(myFind('city', 'fia'));

// const arr = [10, 1, 2, 20];

// const isBetween = (key, low, high, inclusive = true) => {
// 	return function (element) {
// 		return (inclusive === true) ? (element[key] >= low && element[key] <= high) : (element[key] > low && element[key] < high);
// 	}
// };

// const result = people.filter(isBetween('age', 20, 30));
// console.log(result);


// Declarative
const resultArray = people.filter(el => el.age >= 20 && el.age <= 30);
// console.log(resultArray);

// Imperative
const imperativeResultArray = [];

for (let i = 0; i < people.length; i++) {
	const el = people[i];

	const isBetween = el.age >= 20 && el.age <= 30;

	if(isBetween) {
		imperativeResultArray.push(el);
	}
}

// console.log(imperativeResultArray);
