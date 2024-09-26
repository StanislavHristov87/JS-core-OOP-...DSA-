// easy

/**
 * 
 * @param {string} string 
 * @param {number} start 
 * @param {number} end 
 * @returns string 
 */

const slice = (string, start = 0, end = string.length) => {
  // TODO
  let sliced = '';

  for (let index = 0; index < string.length; index++) {
    
    if ( index >= start && index <= end) {
      sliced += string[index];
    } else {
      sliced = sliced;
    }
  }
  return sliced;
};

/**
 * 
 * @param {string} string 
 * @param {number} n 
 * @returns string
 */

const repeat = (string, n) => {
  // TODO
  
  let repeatedString = '';

  for (let i = 1; i <= n; i++) {
    repeatedString += string;

  }
return repeatedString;
};


// medium
/**
 * 
 * @param {} string 
 * @returns string
 */

const capitalize = (string) => {
  // TODO
  let capitalized = string[0].toUpperCase();
  
  let restOfString = '';
  for (let i = 1; i < string.length; i++) {
    restOfString += string[i];
  }
  capitalized += restOfString.toLowerCase();

  return capitalized;
};

/**
 * 
 * @param { string } string 
 * @param {string} char 
 * @param {string} replacement 
 * @returns string
 */

const replace = (string, char, replacement) => {
  // TODO
let replacedString = '';

for (let i = 0; i < string.length; i++) {
  if( string[i] !== char) {
    replacedString += string[i];
  } else {
    replacedString += replacement;
  }
}
return replacedString;
};

// hard

/**
 * 
 * @param {string} string 
 * @param {string} separator 
 * @returns array
 */

const split = (string, separator) => {
  // TODO

  let splittedString = [];

  for (let i = 0; i < string.length; i++) {

    if(string[i] === separator) {
      continue;
    }
    splittedString.push(string[i]);

  }
  return splittedString;

};

/**
 * 
 * @param {*} string 
 * @returns string
 */

const trim = (string) => {
  // TODO

  let trimmedString = '';
 
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      continue;
    }
    trimmedString += string[i];
    
  }
  return trimmedString;
};

const result = trim('   hello   ');

console.log(result);

export { slice, repeat, capitalize, replace, split, trim };
