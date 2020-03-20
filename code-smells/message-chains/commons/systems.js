const { Peritoneum } = require('./organs');
class DigestionSystem {
  constructor() {
    this.peritoneum = new Peritoneum();
    // ... other organs
  }

  getPeritoneum() { return this.peritoneum; }
}

module.exports = {
  DigestionSystem
};