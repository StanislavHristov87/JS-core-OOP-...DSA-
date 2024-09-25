// import { array } from "prop-types";

// const spirit = {
//     ship: 'Spirit',
//     playground: 'The Boat',
//     owner: 'GNV',
//     company: 'Playmart and Co'
// };


const getKeys = (obj) => {

    let arrKey = [];
    for(const key in obj) {
        
        arrKey.push(key);
       
    }
      return arrKey
}

// // const keys = getKeys(spirit);

// // console.log(keys);

// // Example usage:
// let jobOffer = { 
//     title: 'Looking for devops guru', 
//     description: 'Our growing startup of 27400 emplo...' 
//   };

const deleteKey = (obj, key) => {
    let newObj = {};
    
    for (const offerKey in obj) {
        if (offerKey !== key) {
         newObj[key] = obj[key];
        }
        
    }
    return newObj;
}

// let jobOffer2 = deleteKey(jobOffer, 'description');

// console.log(getKeys(jobOffer2)); // [ 'title' ]
// console.log(jobOffer.description); // 'Our growing startup of 27400 emplo...' 
// console.log(jobOffer == jobOffer2); 

const deleteKeys = (obj, keys) => {
    let newObj = {};

    for (let key in obj) {
        if(!keys.includes(key)) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
};

// Example usage:
// let jobOffer = { 
//     title: 'Looking for devops guru', 
//     description: 'Our growing startup of 27400 emplo...',
//     date: '21/12/2112' 
//   };
  
//   let jobOffer2 = deleteKeys(jobOffer, [ 'description', 'date' ]);
  
//   console.log(getKeys(jobOffer2)); // [ 'title' ]
//   console.log(jobOffer.description); // 'Our growing startup of 27400 emplo...' 
//   console.log(jobOffer == jobOffer2);

const getTypeStats = (obj) => {
    let typeStats = {};

    for (let key in obj) {

        let type = typeof obj[key];

        if (Array.isArray(obj[key])){
            type = 'array';
        }
        if (typeStats[type]) {
            typeStats[type]++;
        } else {
            typeStats[type] = 1;
        }
        
    }
    return typeStats;
}

// Example usage:
let jobOffer = { 
    title: 'Looking for devops guru', 
    description: 'Our growing startup of 27400 emplo...',
    date: '21/12/2112' 
  };
  
  let person = {
    firstName: 'Steven',
    lastName: 'Queen',
    age: 60,
    address: {
      street: '12 Port str',
      city: 'Portland'
    },
    interests: [ 'writing', 'drinking' ]
  }
  
  let typeStats1 = getTypeStats(jobOffer);
  console.log(typeStats1); // { strings: 3 }
  let typeStats2 = getTypeStats(person);
  console.log(typeStats2);



   const parseUrl = (url) => {
    
    // let url = 'https://learn.telerikacademy.com/course/view.php?id=36';
    let splittedUrl = url.split('://');

    let protocol = splittedUrl.shift();

    let strUrl = splittedUrl.toString();
    // console.log(strUrl);
    let index = strUrl.indexOf('/');
    let index1 = strUrl.indexOf('?');
    // console.log(index);
    let host = strUrl.substring(0, index);
    let path = strUrl.substring(index, index1);


    let splittedUrl1 = strUrl.split('?');

    splittedUrl1.shift();
    let strUrl1 = splittedUrl1.toString();

     let query1 = strUrl1.split('&');
     let query2 = query1.toString();

     let objValues = [];

     objValues.push(protocol);
     objValues.push(host);
     objValues.push(path);

     //console.log(objValues);

     let objUrl = {};
     let query = {};

    objUrl.protocol = protocol;
    objUrl.host = host;
    objUrl.path = path;
    objUrl.query = {};
    objUrl.query.id = query2;

     
    return objUrl;
   }


  let parsed1 = parseUrl('https://learn.telerikacademy.com/course/view.php?id=36');
console.log(parsed1);
// {
//   protocol: 'https',
//   host: 'learn.telerikacademy.com',
//   path: '/course/view.php',
//   query: {
//      id: '36'
//   }
// }


let parsed2 = parseUrl('https://google.com/search?q=cats&region=eu');
console.log(parsed2)
// {
//   protocol: 'https',
//   host: 'google.com',
//   path: '/search',
//   query: {
//      q: 'cats',
//      region: 'eu'
//   }
// }