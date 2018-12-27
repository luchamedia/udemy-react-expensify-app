console.log("destructuring");

//
// OBJECT DESTRUCTURING
//
const person = {
  name: "Mary",
  age: 29,
  location: {
    city: "LAAAAA",
    temp: 87
  }
};

//  const name = person.name;
//  const age = person.age;
// OR use object destructuring
const { name: firstName = "Anonymous", age } = person;

console.log(`${firstName} is ${age}.`);

const { temp: temperature, city } = person.location;
if (city && temperature) {
  console.log(`Is is ${temperature} in ${city}`);
}

const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
  publisher: {
    name: "penguin"
  }
};

const { name: publisherName = "Self-Published" } = book.publisher;

console.log(publisherName);

//
// ARRAY DESTRUCTURING
//
const address = [
  "1299 S Juniper Street",
  "Philadelphia",
  "Pennsylvania",
  "19147"
];

const [, city, state = "New York"] = address;

console.log(`You are in ${city} ${state}`);

const item = ["coffee (iced)", "$2.00", "$2.25", "$2.75"];

const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);
