function beforePrinter(data) {
    console.log('\n\n\nNew transaction registered:\n');
    console.log(`Title: ${data.title}`);
    data.type && console.log(`Game type: ${data.type}`);
    data.device && console.log(`Device: ${data.device}`);
    data.format && console.log(`Format: ${data.format}`);
    data.publisher && console.log(`Publisher: ${data.publisher}`);
    console.log(`Customer name: ${data.name}`);
    console.log(`Customer lastname: ${data.lastname}`);
    console.log(`Customer DNI: ${data.dni}`);
    console.log(`Customer phone: ${data.phone}`);
    console.log(`Customer email: ${data.email}`);
    console.log(`Product price: ${data.price}`);
    console.log(`Payment method: ${data.paymentMethod}`);
}

function afterPrinter(data) {
    console.log('\n\n\nNew transaction registered:\n');
    console.log(`Title: ${data.title}`);
    data.type && console.log(`Game type: ${data.type}`);
    data.device && console.log(`Device: ${data.device}`);
    data.format && console.log(`Format: ${data.format}`);
    data.publisher && console.log(`Publisher: ${data.publisher}`);
    console.log(`Customer name: ${data.customerData.getName()}`);
    console.log(`Customer lastname: ${data.customerData.getLastName()}`);
    console.log(`Customer DNI: ${data.customerData.getDni()}`);
    console.log(`Customer phone: ${data.customerData.getPhone()}`);
    console.log(`Customer email: ${data.customerData.getEmail()}`);
    console.log(`Product price: ${data.paymentData.getPrice()}`);
    console.log(`Payment method: ${data.paymentData.getPaymentMethod()}`);
}

module.exports = { 
    beforePrinter, 
    afterPrinter
}