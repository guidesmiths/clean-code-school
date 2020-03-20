const { DigestionSystem } = require('./commons/systems');
const { Sausage, Cheese } = require('./commons/food');

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

const haveBreakfast = () => {
  if (!human.getBadMemories().includes(Sausage.name)) {
    human.getDigestionSystem().getPeritoneum().getStomach().addContent(new Sausage(2));
  }

  console.log("Stomach content", human.getDigestionSystem().getPeritoneum().getStomach().getContent());
};

haveBreakfast();