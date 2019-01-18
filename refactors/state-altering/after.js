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

const MAX_NUMBER_OF_CHANGES = 10;

const useReducer = (reducer, initialState, initialAction) => {
  state = lightTransition(initialState);

  function lightSend(event) {
    const nextState = lightTransition(state, event);
    state = nextState;
  }

  return { lightSend };
};

const trafficLightMachine = {
  initial: { to: 'green', duration: '1 minute' },
  states: {
    green: { on: { GO: { to: 'yellow', duration: '10 seconds' } } },
    yellow: { on: { GO: { to: 'red', duration: '1 minute' } } },
    red: { on: { GO: { to: 'green', duration: '1 minute' } } }
  }
};

const lightTransition = (state, event) => {
  return trafficLightMachine.states[state.to].on[event] || state;
};

const TrafficLight = function() {
  let { lightSend } = useReducer(lightTransition, trafficLightMachine.initial);
  this.lightSend = lightSend;
  this.lightLog = () => console.log(`${state.to} --> for ${state.duration}`);
};

const run = () => {
  const light = new TrafficLight();
  for (let index = 1; index < MAX_NUMBER_OF_CHANGES; index++) {
    light.lightLog();
    light.lightSend('GO');
  }
};

run();
