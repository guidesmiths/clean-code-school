const TrafficLight = function () {
  let currentState = 'red';

    this.printCurrentState = () => {
      console.log(`${currentState} --> for 1 minute`);
    }
 
    this.change = () => {
      if(currentState === 'red') {
        currentState = 'greem';
        console.log(`${currentState} --> for 10 seconds`);
      } else if (currentState === 'yellow') {
        currentState = 'red';
        console.log(`${currentState} --> for 1 minute`);
      } else if (currentState === 'green') {
        currentState = 'yellow';
        console.log(`${currentState} --> for 1 minute`);
      }
    }
}

let light = new TrafficLight();

light.printCurrentState();

for (i = 0; i < 11; i++) {
  light.change();
}