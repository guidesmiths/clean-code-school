# Conditional Complexity

## Table of Contents

- [Type of Code Smell](#type-of-code-smell)
- [Description](#description)
- [Recognition. Signs and Symptoms](#recognition-signs-and-symptoms)
- [Refactoring](#refactoring)
- [References](#references)

## Type of Code Smell

TODO: Check the type of your Code smell.

- [x] Bloaters
- [ ] Object-Orientation Abusers
- [ ] Change Preventers
- [ ] Dispensables
- [ ] Couplers

## Description

This code smell refers to those large conditional blocks of **10+** `if-else` statements we all have seen. These blocks start out relatively **small then grow** with as new requirements and features are brought in.They are usually a result of a **lack of design planning**.

## Recognition. Signs and Symptoms

As mentioned before this code smell refers to **large blocks of conditionals** so it is fairly easy to detect. Have a look at this example:

```js
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
```

If we focus on JavaScript more interesting examples can be found in the [`before.js`](./before.js) and [`after.js`](./after.js) files.

## Refactoring

The first thing to do is to **plan before starting a conditional block** or look for an alternative if it is starting to grow. A common solution would be to extract the conditionals into well-named methods with the [Extract Method](https://github.com/guidesmiths/clean-code-school/tree/master/refactors/extract-method).

```js
const getDogEmoji = () => '🐶';
const getCatEmoji = () => '🐱';
const getFrogEmoji = () => '🐸';
const getPandaEmoji = () => '🐼';
const getGiraffeEmoji = () => '🦒';
const getMonkeyEmoji = () => '🐵';
const getUnicornEmoji = () => '🦄';
const getDragonEmoji = () => '🐲';
```

## References

- [Conditional Complexity on Pragmatic Ways](https://www.pragmaticways.com/31-code-smells-you-must-know/#17_Conditional_Complexity)
- [Extract method on Clean Code School](https://github.com/guidesmiths/clean-code-school/tree/master/refactors/extract-method)
- [Extract method on Refactoring Guru](https://refactoring.guru/extract-method)
- [5 tips to write better conditionals](https://scotch.io/bar-talk/5-tips-to-write-better-conditionals-in-javascript)
- [This doc template](https://gist.github.com/reymon359/1dbeab82c0323cc2d6e0d010ba71ebe4)
- [Tips to write better Conditionals](https://dev.to/hellomeghna/tips-to-write-better-conditionals-in-javascript-2189)

