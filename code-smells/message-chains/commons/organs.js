class Stomach {
  constructor() {
    this.content = [];
  }

  addContent(food) { return this.content.push(food) };
  getContent() { return this.content };
}

class Peritoneum {
  constructor() {
    this.stomach = new Stomach();
    // ... other organs
  }

  getStomach() { return this.stomach; }
}

module.exports = {
  Stomach,
  Peritoneum
}
