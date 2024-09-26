// easy

/**
 * Reverse an array
 *
 * @param {array} array the array to be reversed
 * @returns {array} a new reversed copy of the array
 */
const reverse = (array) => {
  const reversed = [];

  for (let index = array.length - 1; index >= 0; index--) {
    reversed.push(array[index]);
  }

  return reversed;
};

/** 
 * Fill an array with a value
 *
 * @param {array} array the array to be filled
 * @param {any} value the value to fill the array with
 * @param {number} start the start index to fill the array
 * @param {number} end the end index to fill the array
 * @returns {array} a new copy of the array filled with the value
 */

const fill = (array, value, start = 0, end = array.length) => {
  // TODO
  let filled = [];

  for (let i = 0; i < array.length; i++) {
    if (i >= start && i < end) {
      filled.push(value);
    } else {
      filled.push(array[i]);
    }
    
  }
  return filled;

};

// medium

/**
 * Join an array into a string
 *
 * @param {array} array the array to be joined
 * @param {string} separator the separator to join the array with
 * @returns {string} the joined string
 */

const join = (array, separator = ',') => {
  // TODO
  let joined = '';

  for (let i = 0; i < array.length; i++) {
    joined += array[i] + separator;
  }
  return joined;
};

/**
 * 
 * @param {array} array 
 * @param {number} element 
 * @returns number
 */
const indexOf = (array, element) => {
  // TODO
  let searchedIndex = -1;
  for (let i  = 0; i < array.length; i++) {
    

    if (array[i] === element) {
      searchedIndex = i;
    } else {
      searchedIndex = searchedIndex;
    }

    
  }
  return searchedIndex;
  
};

// hard
/**
 * 
 * @param {*} array 
 * @param {function} predicate 
 * @returns array
 */

const filter = (array, predicate) => {
  // TODO
  let filtered = [];

  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      filtered.push(array[i]);
    }
  }
  return filtered;
  
};

/**
 * 
 * @param  {array} arrays 
 * @returns array
 */

const zip = (...arrays) => {
  // TODO
  let zipped = [];

  for (let i = 0; i < arrays[0].length; i++) {
    let temp = [];
    for (let j = 0; j < arrays.length; j++) {
      temp.push(arrays[j][i]);
    }
    zipped.push(temp);
  }
  return zipped;
};

export { reverse, fill, join, indexOf, filter, zip };
