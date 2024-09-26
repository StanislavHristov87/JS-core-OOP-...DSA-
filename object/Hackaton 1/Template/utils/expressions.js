// easy

/**
 * 
 * @param {*} str 
 * @param {*} minLength 
 * @returns boolean - true if the string is at least minLength characters long, false otherwise
 */
const isMinLength = (str, minLength) => str.length >= minLength; // TODO

/**
 * 
 * @param {*} str 
 * @param {*} maxLength 
 * @returns boolean - true if the string is at most maxLength characters long, false otherwise
 */
const isMaxLength = (str, maxLength) =>  str.length <= maxLength;

// medium

/** 
 * 
 * @param {*} value 
 * @param {*} possibleValues 
 * @returns boolean - true if the value is in the possibleValues array, false otherwise
 */

const isIn = (value, possibleValues) => possibleValues.includes(value); // TODO

/**
 * 
 * @param {*} arr 
 * @param {*} type
 * @returns boolean
 */

const isArrayOfType = (arr, type) => arr.every((el) => typeof el === type); // TODO

/**
 * 
 * @param {*} array stringNumbers 
 * @returns boolean
 */

const areValidNumbers = (stringNumbers) => stringNumbers.every((el) => !isNaN(el)); // TODO

/**
 * 
 * @param {*} string 
 * @returns number
 */
const sumNumbersFromString = (string) => string.split(' ').reduce((acc, curr) => acc + Number(curr), 0);

export {
  isMinLength,
  isMaxLength,
  isIn,
  isArrayOfType,
  areValidNumbers,
  sumNumbersFromString,
};
