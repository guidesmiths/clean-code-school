function beforePrinter(data) {
    console.log('USER DATA:');
    console.log(`User name: ${data.userName}`);
    console.log(`User lastname: ${data.userLastName}`);
    console.log(`User DNI: ${data.userDni}`);
    console.log(`User phone: ${data.userEmail}`);
    console.log(`User email: ${data.userPhone}`);
}

function afterPrinter(user, phone) {
    console.log('USER PHONE:');
    console.log(`Country code Phone : ${phone.getCountryCode()}`);
    console.log(`Phone: ${phone.getFormatPhone()}\n`);
    console.log('USER DATA:');
    console.log(`User name: ${user.getName()}`);
    console.log(`User lastname: ${user.getLastName()}`);
    console.log(`User DNI: ${user.getDni()}`);
    console.log(`User email: ${user.getPhone()}`);
}

module.exports = {
    beforePrinter,
    afterPrinter
}