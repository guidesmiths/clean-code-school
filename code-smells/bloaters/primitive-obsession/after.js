/*
class Password {
  private String value;

  public Password(String value) {
    if (value.length() < 8) {
      throw new InvalidPasswordException('too short!!);
    }
    this.value = value;
  };
}

class User {
  private String userName;
  private Password password;

  public User(String userName, Password password) {
    this.userName = userName;
    this.password = password;
  }
};

User user = new User('leonardoDaVinci', 'leoInDaHous');

--------------------------------------------------------------

class Runner {
  Name name;
  Email email;
  Category category;
  Age age;
  Distance maxDistance;

  constructor(name, email, category, age, maxDistance) {
    this.name = name;
    this.email = email;
    this.category = category;
    this.age = age;
    this.maxDistance = maxDistance;
  }
}
*/


const Name = value => `${value}`;
const Email = value => {
  const emailRegeEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const validEmail = email => emailRegeEx.test(email);
  if (!validEmail(value)) {
    throw new Error(`The value ${value} is not a valid email`);
  }
  return value;
};

const Age = age => {
  if (typeof age !== 'number')
    throw new Error(`Age (${age}) must be a number`);
  if (age < 0)
    throw new Error(`Age (${age}) cannot be negative`);
  if (age > 150)
    throw new Error(`Age (${age}) is... ok, it is positive, but c'mon, I don't know anyody who has lived more than 150 years except Matuzalem.`);

  return age;
};

const Distance = distance => {
  if (typeof distance !== 'number')
    throw new Error(`distance (${distance}) must be a number`);
  if (distance < 0)
    throw new Error(`distance (${distance}) cannot be negative`);

  return distance;
}

const Category = methods => ({
  print: () => { throw new Error('No category defined'); },
  ...methods,
});

const Turtle = () => Category({ print: () => 'Turtle: I\'m almost as slow as Betisman' });
const Lazy = () => Category({ print: () => 'Lazy: Why running? Just enjoy the couch' });
const Human = () => Category({ print: () => 'Human: I run for hunting or pleasure. Not sure.' });
const Cheetah = () => Category({ print: () => 'Cheetah: I\'m fast, but I wish I\'d be as fast as Ismael.' });

const CATEGORIES = {
  TURTLE: Turtle(),
  LAZY: Lazy(),
  HUMAN: Human(),
  CHEETAH: Cheetah(),
};

const Runner = (_name, _email, _category, _age, _maxDistance) => ({
  name: Name(_name),
  email: Email(_email),
  category: (CATEGORIES[_category] || _category).print(),
  age: Age(_age),
  maxDistance: Distance(_maxDistance),
});

const { CHEETAH, TURTLE } = CATEGORIES;

try {
  const runner1 = Runner('Ismael Bakkali', 'ismaelocaramelo@gsrunning.com', CHEETAH, 24, 15);

  console.table(runner1)

  // const runner2 = Runner('Trolete Martínez', '...notanemail[dot]com', 3, -33, '34');
  // const runner2 = Runner('Trolete Martínez', 'fixed@email.com', '3', -33, '34');
  const runner2 = Runner('Trolete Martínez', 'fixed@email.com', 'TURTLE', 200, '34');
  // const runner2 = Runner('Trolete Martínez', 'fixed@email.com', TURTLE, 200, '34');
  // const runner2 = Runner('Trolete Martínez', 'fixed@email.com', TURTLE, 38, '34');
  // const runner2 = Runner('Trolete Martínez', 'fixed@email.com', TURTLE, 38, -20);
  // const runner2 = Runner('Trolete Martínez', 'fixed@email.com', TURTLE, 38, 21.097);

  console.table(runner2);
} catch (err) {
  console.error(err);
}
