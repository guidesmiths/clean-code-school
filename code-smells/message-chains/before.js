const { Peritoneum } = require('./commons/organs');
const { Sausage, Cheese } = require('./commons/food');
class DigestionSystem {
  constructor() {
    this.peritoneum = new Peritoneum();
    // ... other organs
  }

  //just getters and setters
  getPeritoneum() { return this.peritoneum; }
}
class Human {
  constructor() {
    this.badMemories = [Cheese.name];
    this.digestionSystem = new DigestionSystem();
    // ... other systems  
  }

  //just getters and setters
  getBadMemories() { return this.badMemories; }
  getDigestionSystem() { return this.digestionSystem; }
}

/* MAIN */
const human = new Human();
const food = new Sausage(2);

const haveBreakfast = () => {
  if (!human.getBadMemories().includes(food.constructor.name)) {
    human.getDigestionSystem().getPeritoneum().getStomach().addContent(food);
  }

  console.log("Digesting", human.getDigestionSystem().getPeritoneum().getStomach().getContent());
};

haveBreakfast();