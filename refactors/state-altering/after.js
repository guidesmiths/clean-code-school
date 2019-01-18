/*
  The primary reason for refactoring to the State pattern [DP] is to tame overly complex state-altering conditional logic.
  Such logic, which tends to spread itself throughout a class, controls an object’s state, including how states transition to other states.
  When you implement the State pattern, you create classes that represent specific states of an object and the transitions between those states.
  The object that has its state changed is known in Design Patterns [DP] as the context.
  A context delegates state-dependent behavior to a state object.
  State objects make state transitions at runtime by making the context point to a different state object.

  Moving state-altering conditional logic out of one class and into a family of classes that represent different states can yield a simpler design
  that provides a better bird’s-eye view of the transitions between states.
  On the other hand, if you can easily understand the state transition logic in a class, you likely don’t need to refactor to the State pattern
  (unless you plan to add many more state transitions in the future).
*/

const states = {
  Red: {
    colour: 'red',
    duration: '1 minute',
  },
  Green: {
    colour: 'green',
    duration: '10 seconds',
  },
  Yellow: {
    colour: 'yellow',
    duration: '1 minute',
  },
};

const TrafficLight =  function() {
  let currentState = states.Red;

  this.change = function () {
    // state machine handling transitions between states
    const nextStateTable = {
      red: states.Green,
      yellow: states.Red,
      green: states.Yellow,
    };
    currentState = nextStateTable[currentState.colour];
  };

  this.print = function () {
    console.log(`${currentState.colour} --> for ${currentState.duration}`);
  };
}

const run = () => {
  var light = new TrafficLight();
  for (i = 0; i <= 11; i++) {
    light.print();
    light.change();
  }
};

run();