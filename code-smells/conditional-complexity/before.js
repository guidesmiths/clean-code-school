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
console.log(getAnimalEmoji('dragon'));

/* Before Array.includes 

If we will keep extending the statement with more 
OR statements, the code will get harder to maintain */

const printMyAnimal = (animal) => {
	if (animal === 'dog' || animal === 'cat') {
		console.log(`I have a ${animal}`);
	}
};
console.log(printMyAnimal('dog'));
