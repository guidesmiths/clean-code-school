/* Before using Extract Method */

const getAnimalEmoji = (animal) => {
	if (animal === 'dog') {
		return '🐶';
	} else if (animal === 'cat') {
		return '🐱';
	} else if (animal === 'frog') {
		return '🐸';
	} else if (animal === 'panda') {
		return '🐼';
	} else if (animal === 'giraffe') {
		return '🦒';
	} else if (animal === 'monkey') {
		return '🐵';
	} else if (animal === 'unicorn') {
		return '🦄';
	} else if (animal === 'dragon') {
		return '🐲';
	}
};
console.log(getAnimalEmoji('dragon')); // '🐲'

/* Before using Array.includes 

If we will keep extending the statement with more 
OR statements, the code will get harder to maintain */

const printMyAnimal = (animal) => {
	if (animal === 'dog' || animal === 'cat') {
		console.log(`I have a ${animal}`);
	}
};
console.log(printMyAnimal('dog'));

/* Before using Early exit / Return early 

What if instead of the animal as a simple string, 
it's an object with certain properties. */

const printAnimalDetails = (animal) => {
	let result; // declare a variable to store the final value

	// condition 1: check if animal has a value
	if (animal) {
		// condition 2: check if animal has a type property
		if (animal.type) {
			// condition 3: check if animal has a name property
			if (animal.name) {
				// condition 4: check if animal has a gender property
				if (animal.gender) {
					result = `${animal.name} is a ${animal.gender} ${animal.type}`;
				} else {
					result = 'No animal gender';
				}
			} else {
				result = 'No animal name';
			}
		} else {
			result = 'No animal type';
		}
	} else {
		result = 'No animal';
	}

	return result;
};
console.log(printAnimalDetails()); // 'No animal'
console.log(printAnimalDetails({ type: 'dog', gender: 'female' })); // 'No animal name'
console.log(printAnimalDetails({ type: 'dog', name: 'Lucy' })); // 'No animal gender'
console.log(
	printAnimalDetails({ type: 'dog', name: 'Lucy', gender: 'female' })
); // 'Lucy is a female dog'

