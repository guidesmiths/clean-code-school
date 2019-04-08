
console.log('---------------------ES6--------------------');
class Car {
    constructor(brand){
        this.brand = brand;
    }
    start(){
        console.log(`${this.brand} ${this.model} is starting...`);
    }
}

class Audi extends Car {
    constructor(model){
        super('Audi');
        this.model = model;
    }
}

class Seat extends Car{
    constructor(model){
        super('Seat');
        this.model = model;
    }
}

const Audi_A6 = new Audi('A6');
const Seat_500 = new Seat('500');

Audi_A6.start();
Seat_500.start();
console.log(Audi_A6.start === Seat_500.start );

// -------------ES5----------------
console.log('---------------------ES5--------------------');
function Car2(brand){
    this.brand = brand;
}

Car2.prototype.start = function(){
    console.log(`${this.brand} ${this.model} is starting...`);
}



function Audi2(brand, model){
    Car2.call(this, brand);
    this.model = model;
}

Audi2.prototype = new Car2();



function Seat2(brand, model){
    Car2.call(this, brand);
    this.model = model;
}

Seat2.prototype = new Car2();



const Audi_A1 = new Audi2('Audi','A1');
const Audi_A2 = new Audi2('Audi','A2');
const Seat_Ibiza = new Seat2('Seat','Ibiza');


Audi_A1.start();
Seat_Ibiza.start();

console.log(Audi_A1.start === Seat_Ibiza.start);

