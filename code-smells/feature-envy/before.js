// // Feature envy is a problem because it is a coupling code smell. 
// // It couples two objects together inappropriately. This coupling 
// // introduces a larger surface area of change in the code when one 
// // of the two objects has to be modified. Less isolated changes then 
// // lead to an increase in the likelihood of introducing bugs. Since 
// // it increases coupling, it reduces cohesion of the host class; 
// // making it responsible for additional behavior and likely introducing 
// // a Single Responsibility Principle(SRP) violation.

const { beforePrinter } = require('./helper')

class Phone {
    constructor(unformattedNumber) {
        this.unformattedNumber = unformattedNumber
    }

    get countryCode() { return this.unformattedNumber.substring(0, 3) }
    get areaCode() { return `${this.unformattedNumber.substring(3, 6)}` }
    get baseNumber() { return `${this.unformattedNumber.substring(6, 9)} ${this.unformattedNumber.substring(9, 12)}` }
}

class User {
    constructor(name, lastName, dni, phone, email) {
        this.name = name;
        this.lastName = lastName;
        this.dni = dni;
        this.email = email;
        this.phone = `(${phone.countryCode}) ${phone.areaCode} ${phone.baseNumber}`
    }

    get userName() { return this.name; }
    get userLastName() { return this.lastName; }
    get userDni() { return this.dni; }
    get userEmail() { return this.email; }
    get userPhone() { return this.phone; }
}

const phone = new Phone('+34635538973');
const user1 = new User('Fernando', 'Aparicio Galende', '12345678S', phone, 'fernando.aparicio@guidesmiths.com');

beforePrinter(user1)