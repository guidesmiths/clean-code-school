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

const getAnimalDetails = (animal) => {
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
console.log(getAnimalDetails()); // 'No animal'
console.log(getAnimalDetails({ type: 'dog', gender: 'female' })); // 'No animal name'
console.log(getAnimalDetails({ type: 'dog', name: 'Lucy' })); // 'No animal gender'
console.log(
	getAnimalDetails({ type: 'dog', name: 'Lucy', gender: 'female' })
); // 'Lucy is a female dog'

/* Before using Object Literal

Here we will use a switch case to find fruits by color */

const printFruits = (color) => {
	switch (color) {
		case 'red':
			return ['apple', 'strawberry'];
		case 'yellow':
			return ['banana', 'pineapple'];
		case 'purple':
			return ['grape', 'plum'];
		default:
			return [];
	}
};
console.log(printFruits(null)); // []
console.log(printFruits('yellow')); // ['banana', 'pineapple']

/* Before using Default Parameters and Destructuring

We always need to check for null/undefined value and 
assign default value, or the compilation breaks. 

const example = (param = 'defaultValue') => {...  
  
Can we assign a default parameter to an Object? */

const printVegetableName = (vegetable)=> { 
  if (vegetable && vegetable.name) {
   console.log (vegetable.name);
 } else {
  console.log('unknown');
 }
}
printVegetableName(undefined); // unknown
printVegetableName({}); // unknown
printVegetableName({ name: 'cabbage', quantity: 2 }); // cabbage