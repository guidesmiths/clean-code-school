/*
A code fragment can be grouped together
Wrap the fragment in a new method and lets its name explain the intent
*/

const data = {
	address: {
		street: 'calle de la Alameda',
		zipCode: '28014',
	},
	person: {
		name: 'Thomas',
		lastName: 'Anderson',
	},
};

const before = () => {
	const printAddress = () => {
		console.log(`Street ${data.address.street}`);
		console.log(`ZIP Code ${data.address.zipCode}`);
	};
	printAddress();
	console.log(`First name: ${data.person.name}`);
	console.log(`Last name: ${data.person.lastName}`);
};

const after = () => {
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
};

before();
console.log(`

`);
after();
