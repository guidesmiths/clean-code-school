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

/* After Array.includes 

We can rewrite the conditional 
above by using Array.includes */

const printMyAnimal = (animal) => {
	const animals = ['dog', 'cat', 'hamster', 'turtle'];

	if (animals.includes(animal)) {
		console.log(`I have a ${animal}`);
	}
};
console.log(printAnimals('hamster'));
