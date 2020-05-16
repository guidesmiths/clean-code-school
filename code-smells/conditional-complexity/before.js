/* Before using Extract Method */

const getAnimalEmoji = animal => {
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
