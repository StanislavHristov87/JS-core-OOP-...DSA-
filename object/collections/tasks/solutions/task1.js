// Usable properties
export default function (data) {

  let newArr = [];
    data.map((obj) => {
    const objEt =  obj.usable.reduce((newObj, key) => {
        
      if (obj.hasOwnProperty(key)) {
        newObj[key] = obj[key];
        return newObj;
      }
    }, {});
     newArr.push(objEt);
     return newArr;
  });

const output = newArr;
console.log(output);
}
