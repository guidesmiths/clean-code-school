const printer = require('./helper');



// So what we can do is first using Extract Class to move the repeating params that are related 
// to their own class.

// Then we use Introduce Param Object and pass the whole new object to the 
// method.

// Now our code is tidier and shorter, but we shouldn't abuse this or we might end with undesirable 
// dependency between two classes.



class Transaction {
    tableTopGameTx(title, type, customerData, paymentData) {
        printer.afterPrinter({title, type, customerData, paymentData});
    }
    videogameTx(title, device, customerData, paymentData) {
        printer.afterPrinter({title, device, customerData, paymentData});
    }
    movieTx(title, format, customerData, paymentData) {
        printer.afterPrinter({title, format, customerData, paymentData});
    }
    bookTx(title, publisher, customerData, paymentData) {
        printer.afterPrinter({title, publisher, customerData, paymentData});
    }
}

class CustomerData {
    constructor(name, lastName, dni, phone, email) {
        this._name = name;
        this._lastName = lastName;
        this._dni = dni;
        this._phone = phone;
        this._email = email;
    }

    getName() { return this._name; }
    getLastName() { return this._lastName; }
    getDni() { return this._dni; }
    getPhone() { return this._phone; }
    getEmail() { return this._email; }
}

class PaymentData {
    constructor(price, paymentMethod) {
        this._price = price;
        this._paymentMethod = paymentMethod;
    }

    getPrice() { return this._price; }
    getPaymentMethod() { return this._paymentMethod; }
}

var transaction = new Transaction();
var customerData1 = new CustomerData('Nuria', 'Extremadouro Mayoral', '12345678X', '655655655', 'nuria.extremadouro@guidesmiths.com');
var paymentData1 = new PaymentData(40.00, 'Debit Card');
transaction.tableTopGameTx('Warhammer 40k', 'Strategy', customerData1, paymentData1);
var customerData2 = new CustomerData('Nuria', 'Extremadouro Mayoral', '12345678X', '655655655', 'nuria.extremadouro@guidesmiths.com');
var paymentData2 = new PaymentData(54.95, 'Debit Card');
transaction.videogameTx('Horizon Zero Dawn', 'PS4', customerData2, paymentData2);
var customerData3 = new CustomerData('Nuria', 'Extremadouro Mayoral', '12345678X', '655655655', 'nuria.extremadouro@guidesmiths.com');
var paymentData3 = new PaymentData(11.99, 'Debit Card');
transaction.movieTx('Harry Potter and the Chamber of Secrets', 'BlueRay', customerData3, paymentData3);
var customerData4 = new CustomerData('Nuria', 'Extremadouro Mayoral', '12345678X', '655655655', 'nuria.extremadouro@guidesmiths.com');
var paymentData4 = new PaymentData(19.95, 'Debit Card');
transaction.bookTx('Mistborn: The Final Empire', 'Nova', customerData4, paymentData4);