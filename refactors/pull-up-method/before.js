
console.log('---------------------ES6--------------------');
class Car {
    constructor(brand){
        this.brand = brand;
    }
}

class Audi extends Car {
    constructor(model){
        super('Audi');
        this.model = model;
    }
     start(){
         console.log(`${this.brand} ${this.model} is starting...`);
     }
}

class Seat extends Car{
    constructor(model){
        super('Seat');
        this.model = model;
    }
    start(){
        console.log(`${this.brand} ${this.model} is starting...`);
    }
}

const Audi_A6 = new Audi('A6');
const Seat_500 = new Seat('500');

Audi_A6.start();
Seat_500.start();
//console.log(Audi_A6.start === Seat_500.start );

console.log('---------------------ES5--------------------');
// -------------ES5----------------

function Car2(brand){
    this.brand = brand;
}


function Audi2(brand, model){
    Car2.call(this, brand);
    this.model = model;
}
Audi2.prototype = new Car2();
Audi2.prototype.start = function(){
    console.log(`${this.brand} ${this.model} is starting...`);
}


function Seat2(brand, model){
    Car2.call(this, brand);
    this.model = model;
}
Seat2.prototype = new Car2();
Seat2.prototype.start = function(){
    console.log(`Seat ${this.model} is starting...`);
}


const Audi_A1 = new Audi2('Audi','A1');
const Seat_Ibiza = new Seat2('Seat','Ibiza');


Audi_A1.start();
Seat_Ibiza.start();
//console.log(Audi_A1.start === Seat_Ibiza.start);
