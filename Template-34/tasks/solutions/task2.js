// People with cities and population
/**
 * 
 * @param {{cities: Array<{ id: number, name: string }>, people: Array<{ name: string, city: number }>}} data 
 */
export default function (data) {
  // your code starts here
// city ima imeto na grada i id na grada i na choveka savpadat
  // your code ends here
  // return data.people
  //  .map((person) => {
  //   const transfObj = {};
  //   const cityObj = {};
  //   transfObj.name = person.name;
  //   transfObj.city = cityObj;

  //      data.cities.filter((c) => {
  //       data.people.filter((p) => {

  //         if ( c.id === p.city) {
  //           transfObj.city.name = c.name;
  //         }
  //         return transfObj
  //       })
        
  //     })

  //   return transfObj; 
  // } )
  // debugger;
  return data.people.map((person) => {
    const transfObj = {};
    const cityObj = {};
    transfObj.name = person.name;
    transfObj.city = cityObj;

    data.people.filter((p) => {
      for (const key of data.cities) {
        if (transfObj.city.name) {
          break;
        }
        if (p.city === key.id) {
          transfObj.city.name = key.name;
        }
      }
    });

    return transfObj;
  });

  // expected return
  // kolekciq ot people transformiran da vklyuchva :
  //person name, person city ne id a,
  // obekt s imeto na grada i populaciqta- kolko choveka jiveqt
}
