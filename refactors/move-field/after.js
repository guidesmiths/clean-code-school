// Here we have moved the fields related to the employee's personal data to the class PersonalData,
// where they're being used and make more sense, keeping only one field on the Employee class to
// access them if needed. We should also make the moved fields private and provide access
// methods on PersonalData.





class Employee {
    constructor(personalData, jobPosition, ssNumber, dateEnrollment, bankAccount) {
        this.personalData = personalData;
        this.jobPosition = jobPosition;
        this.ssNumber = ssNumber;
        this.dateEnrollment = dateEnrollment;
        this.bankAccount = bankAccount;
    }
}

class PersonalData {
    constructor(name, lastName, dateOfBirth, street, postalCode, city, phone, email) {
        this._name = name;
        this._lastName = lastName;
        this._dateOfBirth = dateOfBirth;
        this._street = street;
        this._postalCode = postalCode;
        this._city = city;
        this._phone = phone;
        this._email = email;
    }

    getName() { return this._name };
    getLastName() { return this._lastName };
    getDateOfBirth() { return this._dateOfBirth };
    getStreet() { return this._street };
    getPostalCode() { return this._postalCode };
    getCity() { return this._city };
    getPhone() { return this._phone };
    getEmail() { return this._email };

    getFullName() {
        return 'Employee: ' + this._name + ' ' + this._lastName;
    }

    getFullAddress() {
        return 'Address: ' + this._street + ', C.P.: ' + this._postalCode + ', ' + this._city;
    }

    getContactInfo() {
        return 'Email: ' + this._email + ' - Phone: ' + this._phone;
    }

    printPersonalCard() {
        console.log('/'.repeat(70) + '\n' +
                    '/'.repeat(2) + ' '.repeat(66) + '/'.repeat(2) + '\n' +
                    '/'.repeat(2) + ' '.repeat(66) + '/'.repeat(2) + '\n' +
                    '/'.repeat(2) + ' '.repeat(6) + 'PERSONAL DATA' + ' '.repeat(47) + '/'.repeat(2) + '\n' +
                    '/'.repeat(2) + ' '.repeat(66) + '/'.repeat(2) + '\n' +
                    '/'.repeat(2) + ' '.repeat(6) + personalData.getFullName() + ' '.repeat(24) + '/'.repeat(2) + '\n' +
                    '/'.repeat(2) + ' '.repeat(6) + personalData.getFullAddress() + ' '.repeat(18) + '/'.repeat(2) + '\n' +
                    '/'.repeat(2) + ' '.repeat(6) + personalData.getContactInfo() + ' '.repeat(13) + '/'.repeat(2) + '\n' +
                    '/'.repeat(2) + ' '.repeat(66) + '/'.repeat(2) + '\n' +
                    '/'.repeat(2) + ' '.repeat(66) + '/'.repeat(2) + '\n' +
                    '/'.repeat(70));
    }
}

let personalData = new PersonalData('Nuria', 'Extremadouro Mayoral', '05/10/1992', 'Fake St. 123', '12345', 'Madrid', '654654654', 'nuria.test@domain.com');
let employee = new Employee(personalData, 'Programmer', '1234567890', '22/03/2019', '1234567890');
personalData.printPersonalCard();