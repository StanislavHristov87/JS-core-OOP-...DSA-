// easy

/**
 * 
 * @param {*} array of numbers
 * @returns number - the smallest number in the array
 */

const min = (array) => {
  // TODO
  let result = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < result) {
      result = array[i];
    }
  }
  return result;  
};

/**
 * 
 * @param {*} array  of numbers
 * @returns number - the sum of all numbers in the array
 */

const sum = (array) => {
  // TODO
  let result = 0;

  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
};

// medium

/**
 * 
 * @param {*} array of numbers
 * @returns number - the average of all numbers in the array
 */

const average = (array) => {
  // TODO
  let result = 0;

  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result / array.length;
};

/**
 * 
 * @param {*} number
 * @param {*} power
 * @returns number - the result of number to the power of power
 */

const pow = (number, power) => {
  // TODO
  let result = 1;

  for (let i = 0; i < power; i++) {
    result *= number;
  }
  return result;
};

// hard

/**
 *  
 * @param {*} number
 * @returns boolean - true if the number is prime, false otherwise
 */

const isPrime = (number) => {
  // TODO
  if (number < 2) {
    return false;
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
};

/**
 * 
 * @param {*} number
 * @returns string - the number with the whole and remainder parts swapped
 */

const swapWholeAndRemainder = (number) => {
  // TODO
  let numberString = number.toString();
  let numberArray = numberString.split('.');
  let result = numberArray[1] + '.' + numberArray[0];
  return result;
};

export { min, sum, average, pow, isPrime, swapWholeAndRemainder };
