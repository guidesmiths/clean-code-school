/* 

  TODO:
    - Description why Composition over Inheritance
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
