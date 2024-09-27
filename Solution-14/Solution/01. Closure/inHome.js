const add = (a, b) => a + b;
 
const decorateWithLogging = func => {
  // TODO: Add your solution here
  const decoratedAdd = (add) => {
    
    return func(a, b);
  }
  return decoratedAdd();

};
 
const decoratedAdd = decorateWithLogging(add);
const result = decoratedAdd(1, 2);
 
console.log(result);