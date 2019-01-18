/*
A code fragment can be grouped together
Wrap the fragment in a new method and lets its name explain the intent
*/

const data = require('./data.json');

const printAddress = () => {
  console.log(`Street ${data.address.street}`);
  console.log(`ZIP Code ${data.address.zipCode}`);
};
const printPerson = () => {
  console.log(`First name: ${data.person.name}`);
  console.log(`Last name: ${data.person.lastName}`);
};
printAddress();
printPerson();