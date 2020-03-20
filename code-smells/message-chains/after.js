const { Peritoneum } = require('./commons/organs');
const { Sausage, Cheese } = require('./commons/food');

class DigestionSystem {
  constructor() {
    this.peritoneum = new Peritoneum();
    // ... other organs
  }

  //just getters and setters
  //getPeritoneum() { return this.peritoneum; }

  swallow(food) { this.peritoneum.getStomach().addContent(food); }
  content() { return this.peritoneum.getStomach().getContent(); }
}

class Memories {
  constructor(list) {
    this.list = list;
  }

  has(item) {
    return this.list.includes(item);
  }
}
class Human {
  constructor() {
    this.badMemories = new Memories([Cheese.name]);
    this.digestionSystem = new DigestionSystem();
    // ... other systems  
  }

  //just getters and setters
  //getBadMemories() { return this.badMemories; }
  //getDigestionSystem() { return this.digestionSystem; }

  likes(food) {
    // Dont Ask, Tell 
    // if (!human.getBadMemories().includes(Sausage.name)) {
    return !this.badMemories.has(food.constructor.name);
  }

  eat(food) {
    if (this.likes(food)) { // Decompose Conditional
      // Law of Demeter -> Extract Method
      // human.getDigestionSystem().getPeritoneum().getStomach().addContent(new Sausage(2));
      this.digestionSystem.swallow(food);
    }
  }

  digesting() {
    // Law of Demeter -> Extract Method
    //human.getDigestionSystem().getPeritoneum().getStomach().getContent()
    return this.digestionSystem.content();
  }
}

/* MAIN */
const human = new Human();

const haveBreakfast = () => {
  human.eat(new Sausage(2));
  console.log("Digesting", human.digesting());
};

haveBreakfast();