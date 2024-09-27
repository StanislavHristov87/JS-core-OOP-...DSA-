export const byKey = (key, order = 'asc') => {
  return function (a, b) {

    // TODO: Check if key is present in a and b


    if (typeof a[key] === 'string' && typeof b[key] === 'string') {
      const comparison = a[key].localeCompare(b[key]);

      return (order === 'desc') ? -comparison : comparison;
    }

    const comparison = (a[key] - b[key])

    return (order === 'desc') ? -comparison : comparison;
  }
}


export const findBy = (key, value) => {
  return function (element) {
    const currentValue = element[key];

    return currentValue === value
      || currentValue.startsWith(value)
      || currentValue.includes(value);
  }
};

export const isBetween = (key, low, high) => {

  // Closure. You return a new function which has closure over key, low and high
};

export const isLower = (key, value) => {

  // Closure. You return a new function which has closure over key and value
};

export const isHigher = (key, value) => {

  // Closure. You return a new function which has closure over key and value
};

export const startsWith = (key, letter) => {

  // Closure. You return a new function which has closure over key and letter
};
