const exampleWithClasses = () => {
  console.log('Example using classes ---------------------');

  class Player {
    constructor(name, position) {
      this.name = name;
      this.position = position;
    }

    getPosition() {
      return this.position;
    }

    toString() {
      return `${this.position.getLabel()} ${this.name}`;
    }
  }

  class Position {
    getLabel() { }
  }

  class Goalkeeper extends Position {
    getLabel() {
      return 'It\'s a goalie:';
    }
  }

  class Defender extends Position {
    getLabel() {
      return 'Playing hard in defense:';
    }
  }

  class Midfielder extends Position {
    getLabel() {
      return 'The brain of the team:';
    }
  }
  class Forward extends Position {
    getLabel() {
      return 'The striker:';
    }
  }

  let player = new Player('Gordillo', new Defender());
  console.log(player.toString())

  player = new Player('Gordillo', new Midfielder())
  console.log(player.toString())
}

const exampleWithFunctions = () => {
  console.log('Example using classes ---------------------');

  const Player = (name, position) => {
    const myName = name;
    const myPosition = position;
    const toString = () => `${myPosition.label()} ${myName}`;

    return {
      toString,
    }
  }

  const Position = (methods) => ({
    label: () => 'No label for generic position',
    ...methods
  });

  const Goalkeeper = Position({
    label: () => 'It\'s a goalie:',
  });

  const Defender = Position({
    label: () => 'Playing hard in defense:',
  });

  const Midfielder = Position({
    label: () => 'The brain of the team:',
  });

  const Forward = Position({
    label: () => 'The striker:',
  });

  const Wing = Position({
    label: () => 'The fint and the sprint:',
  });

  let player = Player('Joaquín', Midfielder);
  console.log(player.toString())

  player = Player('Joaquín', Forward)
  console.log(player.toString())

  player = Player('Joaquín', Wing)
  console.log(player.toString())
}

const runClasses = process.argv.includes('classes');
const runFunctions = process.argv.includes('functions');

runClasses && exampleWithClasses();
runFunctions && exampleWithFunctions();
