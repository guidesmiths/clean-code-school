const { afterPrinter } = require('./helper');

// MOVE METHOD
// implements getFormatPhone moved from makeUSer
// implements private members
function makePhone(unformattedNumber) {
    this.phone = unformattedNumber;
    const chunkSize = 3;

    const chunkPhone = (str, size) => str.match(new RegExp('.{1,' + size + '}', 'g')).join(' ');
    const getCountryCode = () => unformattedNumber.substring(0, 3);
    const getFormatPhone = () => this.phone = chunkPhone(unformattedNumber, chunkSize);

    return {
        getCountryCode,
        getFormatPhone,
    }
}

// makeUser method has single responsibility. 
// makerUser method is uncoupling.
function makeUser(name, lastName, dni, phone, email) {
    this.name = name;
    this.lastName = lastName;
    this.dni = dni;
    this.phone = phone;
    this.email = email

    const getName = () => name;
    const getLastName = () => lastName;
    const getDni = () => dni;
    const getEmail = () => email;
    const getPhone = () => phone;

    return {
        getName,
        getLastName,
        getDni,
        getEmail,
        getPhone,
    }
};

const phone1 = makePhone('+34635538973');
const user1 = makeUser('Fernando', 'Aparicio Galende', '12345678S', phone1.getFormatPhone(), 'fernando.aparicio@guidesmiths.com');

afterPrinter(user1, phone1)


// //////////    --- BONUS ---     ////////////
console.log(`\nThe private member gets undefined: ${user1.phone}`);

delete user1.phone;
console.log(`\nThe private member can't delete: ${user1.getPhone()}`);



