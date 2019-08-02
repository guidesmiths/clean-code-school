const printer = require('./helper');



// A data clump is a set of variables that are always passed around together to
// methods or other parts of the code. They're usually closely related.



class Transaction {
    tableTopGameTx(title, type, name, lastname, dni, phone, email, price, paymentMethod) {
        printer.beforePrinter({title, type, name, lastname, dni, phone, email, price, paymentMethod});
    }
    videogameTx(title, device, name, lastname, dni, phone, email, price, paymentMethod) {
        printer.beforePrinter({title, device, name, lastname, dni, phone, email, price, paymentMethod});
    }
    movieTx(title, format, name, lastname, dni, phone, email, price, paymentMethod) {
        printer.beforePrinter({title, format, name, lastname, dni, phone, email, price, paymentMethod});
    }
    bookTx(title, publisher, name, lastname, dni, phone, email, price, paymentMethod) {
        printer.beforePrinter({title, publisher, name, lastname, dni, phone, email, price, paymentMethod});
    }
}

var transaction = new Transaction();
transaction.tableTopGameTx('Warhammer 40k', 'Strategy', 'Nuria', 'Extremadouro Mayoral', '12345678X', '655655655', 'nuria.extremadouro@guidesmiths.com', 40.00, 'Debit Card');
transaction.videogameTx('Horizon Zero Dawn', 'PS4', 'Nuria', 'Extremadouro Mayoral', '12345678X', '655655655', 'nuria.extremadouro@guidesmiths.com', 54.95, 'Debit Card');
transaction.movieTx('Harry Potter and the Chamber of Secrets', 'BlueRay', 'Nuria', 'Extremadouro Mayoral', '12345678X', '655655655', 'nuria.extremadouro@guidesmiths.com', 11.99, 'Debit Card');
transaction.bookTx('Mistborn: The Final Empire', 'Nova', 'Nuria', 'Extremadouro Mayoral', '12345678X', '655655655', 'nuria.extremadouro@guidesmiths.com', 19.95, 'Debit Card');