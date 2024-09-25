// 1.

const getKeys = (obj) => {
    let keys = [];
    for (let key in obj) {
        keys.push(key);
    }
    return keys;
}
/*
// Example usage:
let jobOffer = {
    title: 'Looking for devops guru',
    description: 'Our growing startup of 27400 emplo...'
};

let keys = getKeys(jobOffer);
console.log(keys);
// keys: [ 'title', 'description' ]
*/

// 2.

const deleteKey = (obj, keyToDelete) => {
    let newObj = {};
    for (let key in obj) {
        if (key !== keyToDelete) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

/*
let jobOffer = {
    title: 'Looking for devops guru',
    description: 'Our growing startup of 27400 emplo...'
};

let jobOffer2 = deleteKey(jobOffer, 'description');

console.log(getKeys(jobOffer2)); // [ 'title' ]
console.log(jobOffer.description); // 'Our growing startup of 27400 emplo...' 
console.log(jobOffer == jobOffer2); // false
*/

// 3.
const deleteKeys = (obj, keysToDelete) => {
    let newObj = {};
    for (let key in obj) {
        if (!keysToDelete.includes(key)) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

/*
// Example usage:
let jobOffer = {
    title: 'Looking for devops guru',
    description: 'Our growing startup of 27400 emplo...',
    date: '21/12/2112'
};

let jobOffer2 = deleteKeys(jobOffer, ['description']);

console.log(getKeys(jobOffer2)); // [ 'title', 'date' ]
console.log(jobOffer.description); // 'Our growing startup of 27400 emplo...' 
console.log(jobOffer2.description); // undefined
*/

// 4.
const getTypeStats = (obj) => {
    let typeStats = {};
    for (let key in obj) {
        let type = typeof obj[key];
        if (Array.isArray(obj[key])) {
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

/*
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
    interests: ['writing', 'drinking']
}

let typeStats1 = getTypeStats(jobOffer);
console.log(typeStats1); // { strings: 3 }
let typeStats2 = getTypeStats(person);
console.log(typeStats2); // { strings: 2, numbers: 1, objects: 1, arrays: 1 }
*/

// 5.

const parseUrl = (url) => {
    let parsed = {};

    let protocolEndIndex = url.indexOf(':');

    parsed.protocol = url.slice(0, protocolEndIndex);

    let hostStartIndex = url.indexOf('//') + 2;

    let hostEndIndex = url.indexOf('/', hostStartIndex);

    parsed.host = url.slice(hostStartIndex, hostEndIndex);

    let queryStartIndex = url.indexOf('?');

    if (queryStartIndex === -1) {
        parsed.path = url.slice(hostEndIndex);
        parsed.query = {};
    } else {
        parsed.path = url.slice(hostEndIndex, queryStartIndex);
        let queryParams = url.slice(queryStartIndex + 1).split('&');
        parsed.query = {};
        for (let param of queryParams) {
            let [key, value] = param.split('=');
            parsed.query[key] = value;
        }
    }
    return parsed;
}

/* Example usage

let parsed1 = parseUrl('https://learn.telerikacademy.com/course/view.php?id=36');
console.log(parsed1);
// {
//   protocol: 'https',
//   host: 'learn.telerikacademy.com',
//   path: '/course/view.php',
//   query: { id: '36' }
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
*/