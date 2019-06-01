
//object destructuring


// const person ={
//     name: "CJ" ,
//     age: 50000,
//     location: {
//         city: "Tally",
//         temp: -45
//     }
// };

// const {name: firstName = "Anonymous", age} = person;

// console.log(`${firstName} is ${age}`)

// const {city, temp: temperature} = person.location;

// if (city && temperature){
// console.log(`It's ${temperature} in ${city}`)
// }


// const book = {
//     title: "Ego is the enemy",
//     author: "Ryan Holiday",
//     publisher: {
//         //name: "Penguin",
//     }
// };

// const {name: publisherName = "Self-published"} = book.publisher;

// console.log(publisherName);

//array destructuring

const address =[ "1299 SOuth Juniper street", "Philly", "Pennsylvania", "19147"]

const [, city, state = NY ] = address;

console.log(`You are in ${city} ${state}`)


const item = ["coffee", "hot", "2.00", , "2.75"];

const [product, , , mediumPrice = "2.55", ] = item;

console.log(`A medium ${product} costs ${mediumPrice}.`)