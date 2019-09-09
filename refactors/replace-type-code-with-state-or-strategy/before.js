const exampleWithClasses = () => {
  console.log('Example using classes ---------------------');

  const POSITIONS = {
    GOALKEEPER: 0,
    DEFENDER: 1,
    MIDFIELDER: 2,
    FORWARD: 3,
  }

  class Player {
    constructor(name, position) {
      this.name = name;
      this.position = position;

      this.GOALKEEPER = POSITIONS.GOALKEEPER;
      this.DEFENDER = POSITIONS.DEFENDER;
      this.MIDFIELDER = POSITIONS.MIDFIELDER;
      this.FORWARD = POSITIONS.FORWARD;
    }

    toString() {
      if (this.position === this.GOALKEEPER) {
        return `It's a goalie: ${this.name}`;
      } 
      else if (this.position === this.DEFENDER) {
        return `Playing hard in defense: ${this.name}`;
      } 
      else if (this.position === this.MIDFIELDER) {
        return `The brain of the team: ${this.name}`;
      } 
      else if (this.position === this.FORWARD) {
        return `The striker: ${this.name}`;
      } 
      else throw new Error(`Unknown position (${this.position})`);
    }
  }

  let player = new Player('Gordillo', POSITIONS.DEFENDER);
  console.log(player.toString());

  player = new Player('Gordillo', POSITIONS.MIDFIELDER)
  console.log(player.toString());
}

const exampleWithFunctions = () => {
  console.log('Example using functions ---------------------');

  const POSITIONS = {
    GOALKEEPER: 0,
    DEFENDER: 1,
    MIDFIELDER: 2,
    FORWARD: 3,
    WING: 4,
  }

  const Player = (name, position) => {
    const myName = name;
    const myPosition = position;
    const toString = () => {
      if (myPosition === POSITIONS.GOALKEEPER) {
        return `It's a goalie: ${myName}`;
      }
      else if (myPosition === POSITIONS.DEFENDER) {
        return `Playing hard in defense: ${myName}`;
      }
      else if (myPosition === POSITIONS.MIDFIELDER) {
        return `The brain of the team: ${myName}`;
      }
      else if (myPosition === POSITIONS.FORWARD) {
        return `The striker: ${myName}`;
      } else if (myPosition === POSITIONS.WING) {
        return `The fint and the sprint: ${myName}`;
      }
      else throw new Error(`Unknown position (${myPosition})`);
    }

    return {
      toString,
    }
  }

  let player = Player('Joaquín', POSITIONS.MIDFIELDER);
  console.log(player.toString());

  player = Player('Joaquín', POSITIONS.FORWARD);
  console.log(player.toString());

  player = Player('Joaquín', POSITIONS.WING);
  console.log(player.toString());
}

const runClasses = process.argv.includes('classes');
const runFunctions = process.argv.includes('functions');

runClasses && exampleWithClasses();
runFunctions && exampleWithFunctions();
