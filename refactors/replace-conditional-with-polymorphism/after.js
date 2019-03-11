/*
class Car {
  speed() {
    return 'What car do you have?';
  }
}

class Toyota extends Car {
  speed(extra = 0) {
    return 160 + extra;
  }
}

class Mercedes extends Car {
  speed() {
    return 150;
  }
}

class Skoda extends Car {
  speed() {
    return 140;
  }
}

const car = new Car();
const toyota = new Toyota();
const mercedes = new Mercedes();
const skoda = new Skoda();

console.log(
  car.speed(),
  toyota.speed(2),
  mercedes.speed(),
  skoda.speed(),
);
*/
const Car = (methods) => {
  return {
    speed: () => 'No speed for that car',
    ...methods,
  };
};

const car = Car();

const toyota = Car({
  speed: (extra) => 140 + extra,
});

const mercedes = Car({
  speed: () => 140,
});

const skoda = Car({
  speed: () => 140,
});

console.log(
  car.speed(),
  toyota.speed(12),
  mercedes.speed(),
  skoda.speed(),
);

