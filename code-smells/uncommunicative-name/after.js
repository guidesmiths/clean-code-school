const { log } = console;
const { sqrt, pow } = Math;


const currentDate = () => moment().format("YYYY/MM/DD");


const getUser = () => {};


const timer = () => {
    const MILLISECONDS_IN_A_DAY = 86400000;
    setTimeout(blastOff, MILLISECONDS_IN_A_DAY);
}

const address = () => {
    const address = "One Infinite Loop, Cupertino 95014";
    const cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
    const [, city, zipCode] = address.match(cityZipCodeRegex) || [];
    saveCityZipCode(city, zipCode);
}

const locations = () => {
    const locations = ["Austin", "New York", "San Francisco"];
    locations.forEach(location => {
    doStuff();
    doSomeOtherStuff();
    // ...
    // ...
    // ...
    dispatch(location);
    });
}


const pythagorasTheorem = (cathetus1, cathetus2) => sqrt(pow(cathetus1, 2) + (pow(cathetus2, 2)));


const fibonacci = fibonacciLength => (
    [...Array(fibonacciLength)].reduce((accumulator, _, index) => accumulator.concat(index > 1 ? accumulator[index - 1] + accumulator[index - 2] : index),[])
    );


class Calculator {
    constructor(val1, val2){
        this.val1 = val1;
        this.val2 = val2;
    }

    sum() {
        return val1 + val2;
    }

    product() {
        return val1 * val2;
    }
}


module.exports.pythagorasTheorem = (cathetus1, cathetus2) => {
    log(pythagorasTheorem(cathetus1, cathetus2))
} 

module.exports.fibonacci = (number) => {
    log(fibonacci(number))
} 

module.exports.calculator = (val1, val2) => {
    const calculator = new Calculator(val1, val2);
    log(calculator.sum(val1, val2))
} 