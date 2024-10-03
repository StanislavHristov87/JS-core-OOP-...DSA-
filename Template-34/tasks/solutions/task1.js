
/**
 * 
 * @param {array} data 
 * @returns 
 */





// Usable properties
export default function (data) {
  // your code starts here
  return data.map((obj) => {
    return obj.usable.reduce((transformedObject, usbleEl) => {
       transformedObject[usbleEl] = obj[usbleEl];
       return transformedObject;
     },{});
     
     
   })
  
//     for (const obj of data) {
//       const TransfObj = {};
//       for (const key in obj.usable) {
//         TransfObj[key] = obj[key]
      
//     }

//  output.push(TransfObj)

  // your code ends here
//}
//return output
}