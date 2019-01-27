class Human {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(
      '--------------------------------- \n' + 'My name is: ' + this.name,
      '\n\n'
    );
  }
}

class Writer extends Human {
  constructor(name, book) {
    super(name);
    this.book = book;
  }

  write() {
    console.log(`Writing my own book called: ${this.book}`, '\n\n');
  }
}

class Runner extends Human {
  constructor(name, distance) {
    super(name);
    this.distance = distance;
  }

  run() {
    console.log(`Running until exhaustion, distance: ${this.distance}`, '\n\n');
  }
}

const person1 = new Writer('Ismael', 'PDD, Peta Drive Development');

const person2 = new Runner('Carlos', '32km');

person1.speak();
person1.write();

person2.speak();
person2.run();
