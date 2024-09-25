
const array = ['folder', 'Testing', 'process', 'Constraints', 11, 7, 10,1, 7, 'importing']

export const removeFirst = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error(`${arr} is not an Array!`);
  }

}

export const removeLast = (arr) => {
 return arr.pop();
};


export const addFirst = (arr, element) => {
    return arr.unshift(element);
};


export const addLast = (arr, element) => {
   return arr.push(element);
};


export const contains = (arr, element) => {
 const result =  arr.includes(element);
 // console.log(result);
 return result;
};

