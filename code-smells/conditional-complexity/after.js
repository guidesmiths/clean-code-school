/* After using Extract Method */

const getDogEmoji = () => '🐶';
const getCatEmoji = () => '🐱';
const getFrogEmoji = () => '🐸';
const getPandaEmoji = () => '🐼';
const getGiraffeEmoji = () => '🦒';
const getMonkeyEmoji = () => '🐵';
const getUnicornEmoji = () => '🦄';
const getDragonEmoji = () => '🐲';
console.log(getFrogEmoji()); // '🐸'

/* After using Array.includes 

We can rewrite the conditional 
above by using Array.includes */

const printMyAnimal = (animal) => {
	const animals = ['dog', 'cat', 'hamster', 'turtle'];

	if (animals.includes(animal)) {
		console.log(`I have a ${animal}`);
	}
};
console.log(printAnimals('hamster'));

/* After using Early exit / Return early 

We can refactor printAnimalDetails with ternary operators, 
&& conditions, etc. but instead let's write more precise code 
by using multiple return statements. */

const getAnimalDetails = ({ type, name, gender } = {}) => {
	if (!type) return 'No animal type';
	if (!name) return 'No animal name';
	if (!gender) return 'No animal gender';

	return `${name} is a ${gender} ${type}`;
};
console.log(getAnimalDetails()); // 'No animal type'
console.log(getAnimalDetails({ type: 'dog' })); // 'No animal name'
console.log(getAnimalDetails({ type: 'dog', gender: 'female' })); // 'No animal name'
console.log(getAnimalDetails({ type: 'dog', name: 'Lucy', gender: 'female' })); // 'Lucy is a female dog'

/* After using Object Literal

The same result can be achieved with object literal with cleaner syntax */

const colorFruits = {
	red: ['apple', 'strawberry'],
	yellow: ['banana', 'pineapple'],
	purple: ['grape', 'plum'],
};
const printFruits = (color) => colorFruits[color] || [];
console.log(printFruits(null)); // []
console.log(printFruits('yellow')); // ['banana', 'pineapple']

/* After using Default Parameters and Destructuring

we can destructure the parameter using { name }, then we can use name as a variable 
in our code instead of vegetable.name. We also assign an empty object {} as a default 
value, otherwise it gives will an error when executing the line 
printVegetableName(undefined) - Cannot destructure property name of undefined or null */

const printVegetableName = ({ name } = {}) => {
	console.log(name || 'unknown');
};
printVegetableName(undefined); // unknown
printVegetableName({}); // unknown
printVegetableName({ name: 'cabbage', quantity: 2 }); // cabbage
