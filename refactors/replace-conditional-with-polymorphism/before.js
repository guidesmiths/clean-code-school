/*

https://refactoring.guru/replace-conditional-with-polymorphism

Create subclasses matching the branches of the conditional.
In them, create a shared method and move code from the corresponding 
branch of the conditional to it. Then replace the conditional with the
relevant method call. The result is that the proper implementation will
be attained via polymorphism depending on the object class.
*/

class Car {
  speed(type, toyotaExtra = 0, teslaMore = 0) {
    if (type === 'Toyota') {
      return 160 + toyotaExtra;
    } else if (type === 'Mercedes') {
      return 150;
    } else if (type === 'Skoda') {
      return 140;
    }else if (type === 'tesla') {
      return 140 + teslaMore;
    } else {
      return 'No speed for that car';
    }
  }
}

const car = new Car();

console.log(
  car.speed(),
  car.speed('Toyota', 2),
  car.speed('Mercedes'),
  car.speed('Skoda'),
);

