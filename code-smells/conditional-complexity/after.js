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

const printAnimalDetails = ({ type, name, gender } = {}) => {
	if (!type) return 'No animal type';
	if (!name) return 'No animal name';
	if (!gender) return 'No animal gender';

	return `${name} is a ${gender} ${type}`;
};
console.log(printAnimalDetails()); // 'No animal type'
console.log(printAnimalDetails({ type: 'dog' })); // 'No animal name'
console.log(printAnimalDetails({ type: 'dog', gender: 'female' })); // 'No animal name'
console.log(
	printAnimalDetails({ type: 'dog', name: 'Lucy', gender: 'female' })
); // 'Lucy is a female dog'
