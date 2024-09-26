// easy

/**
 * 
 * @param {*} obj to search in
 * @param {*} prop to search for
 * @returns boolean
 */

const existInObject = (obj, prop) => {
  // TODO

  let result = false;

  for (let key in obj) {
    if (key.includes(prop)){
      result = true;
    }
  }
  return result;
};

const removeProp = (obj, prop) => {
  // TODO

  for (let key in obj) {
    if (key.includes(prop)){
      delete obj[key];
    }
  }
  return obj;

};

/**
 * 
 * @param {*} obj to copy
 * @returns object
 */

const copy = (obj) => {
  // TODO
  let newObj = {...obj};
  // console.log(obj === newObj);

  return newObj
};

/**
 * 
 * @param {*} object The object to extract the prop types from.
 * @returns  Array of the prop types.
 */

const typeOfProps = (obj) => {
  // TODO
  let result = [];

  for (let key in obj) {
   let type = typeof obj[key];

   result.push(type);
  }
  return result;
};


// hard

/**
 * 
 * @param {*} obj to flat
 *  @returns  object
 */

const flat = (obj) => {
  // TODO
  let result = {};

  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      for (let innerKey in obj[key]) {
        result[`${key}.${innerKey}`] = obj[key][innerKey];
      }
    } else {
      result[key] = obj[key];
    }
  }
return result;
};

/**
 * 
 * @param {*} obj to extract entries from
 *  
 * @returns  Array of the entries.
 */


const entries = (obj) => {
  // TODO
  let result = [];
  
  for (let key in obj) {
    
    result.push([key, obj[key]]);
  }
  return result;
};

export { existInObject, typeOfProps, copy, removeProp, flat, entries };
