function beforePrinter(user, phone) {
    console.log('USER PHONE:');
    console.log(`Country code Phone : ${phone.countryCode}`);
    console.log(`Phone area code: ${phone.areaCode}`);
    console.log(`Phone base number: ${phone.baseNumber}\n`);
    console.log('USER DATA:');
    console.log(`User name: ${user.userName}`);
    console.log(`User lastname: ${user.userLastName}`);
    console.log(`User DNI: ${user.userDni}`);
    console.log(`User phone: ${user.userEmail}`);
    console.log(`User email: ${user.userPhone}`);
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