/* 
  Composition over inheritance (or composite reuse principle) in object-oriented programming (OOP) 
  is the principle that classes should achieve polymorphic behavior and code reuse by their composition
  (by containing instances of other classes that implement the desired functionality) rather than inheritance from a base or parent class.

  To favor composition over inheritance is a design principle that gives the design higher flexibility. 
  In other words, it is better to compose what an object can do than extend what it is.
  Additionally, it avoids problems often associated with relatively minor changes to an 
  inheritance-based model that includes several generations of classes

  JavaScript’s base on prototypes not classes. Classes create Hierarchical class taxonomies which lead us to serial drawbacks:
  - The tight coupling problem
  - Inflexible hierarchy problem
  - The duplication by necessity problem
  - The Gorilla/banana problem. You want the banana but isntead you've got the gorilla holding the banana within the jaile.

  Composition has less tight coupling than Classes, using the factory pattern. 
  All of the most popular libraries and frameworks for JavaScript make heavy use of factory functions.

  More info: https://en.wikipedia.org/wiki/Composition_over_inheritance
*/

const canSpeak = state => ({
  speak: () =>
    console.log(
      '--------------------------------- \n' + 'My name is: ' + state.name,
      '\n\n'
    )
});

const canWrite = state => ({
  write: () => console.log(`Writing my own book called: ${state.book}`, '\n\n')
});

const canRun = state => ({
  run: () =>
    console.log(`Running until exhaustion, distance: ${state.distance}`, '\n\n')
});

const Writer = state => {
  return Object.assign({}, state, canSpeak(state), canWrite(state));
};

const Runner = state => {
  return Object.assign({}, state, canSpeak(state), canRun(state));
};

const Hero = state => {
  return Object.assign(
    {},
    state,
    canSpeak(state),
    canRun(state),
    canWrite(state)
  );
};

const person1 = Writer({ name: 'Ismael', book: 'PDD, Peta Drive Development' });

const person2 = Runner({ name: 'Carlos', distance: '32km' });

const person3 = Hero({
  name: 'Paco',
  book: 'Cómo salir del humo',
  distance: '15km'
});

person1.speak();
person1.write();

person2.speak();
person2.run();

person3.speak();
person3.run();
person3.write();
