// Here we have moved the two new methods that we added into the Payroll class, where they're being used.





class Employee {
    constructor(personalData, salary, jobPosition, ssNumber, dateEnrollment, bankAccount) {
        this.personalData = personalData;
        this.salary = salary;
        this.jobPosition = jobPosition;
        this.ssNumber = ssNumber;
        this.dateEnrollment = dateEnrollment;
        this.bankAccount = bankAccount;
    }
}

class Payroll {
    calculateCleanSalary(salary) {
        var netSalary = 0;
        if (salary > 60000) {
            netSalary = salary - (12450 * 0.19) - (20000 - 12450) * 0.24 - (35200 - 20000) * 0.30 - (60000 - 35200) * 0.37 - (salary - 60000) * 0.45;
        } else if (60000 >= salary && salary > 35200) {
            netSalary = salary - (12450 * 0.19) - (20000 - 12450) * 0.24 - (35200 - 20000) * 0.30 - (salary - 35200) * 0.37;
        } else if (35200 >= salary && salary > 20000) {
            netSalary = salary - (12450 * 0.19) - (20000 - 12450) * 0.24 - (salary - 20000) * 0.30;
        } else if (20000 >= salary && salary > 12450) {
            netSalary = salary - (12450 * 0.19) - (salary - 12450) * 0.24;
        } else if (12450 >= salary) {
            netSalary = salary - (salary * 0.19);
        }
        return netSalary.toFixed(2);
    }

    calculateExtras() {
        return (1000 / 12).toFixed(2);
    }
    
    printPayroll(salary) {
        console.log('/'.repeat(40) + '\n' +
                    '/'.repeat(2) + ' '.repeat(36) + '/'.repeat(2) + '\n' +
                    '/'.repeat(2) + ' '.repeat(36) + '/'.repeat(2) + '\n' +
                    '/'.repeat(2) + ' '.repeat(6) + 'PAYROLL' + ' '.repeat(23) + '/'.repeat(2) + '\n' +
                    '/'.repeat(2) + ' '.repeat(36) + '/'.repeat(2) + '\n' +
                    '/'.repeat(2) + ' '.repeat(6) + 'Gross salary: ' + salary.toFixed(2) + ' '.repeat(8) + '/'.repeat(2) + '\n' +
                    '/'.repeat(2) + ' '.repeat(6) + 'Net salary: ' + this.calculateCleanSalary(salary) + ' '.repeat(10) + '/'.repeat(2) + '\n' +
                    '/'.repeat(2) + ' '.repeat(6) + 'Extras: ' + this.calculateExtras() + ' '.repeat(17) + '/'.repeat(2) + '\n' +
                    '/'.repeat(2) + ' '.repeat(36) + '/'.repeat(2) + '\n' +
                    '/'.repeat(2) + ' '.repeat(36) + '/'.repeat(2) + '\n' +
                    '/'.repeat(40));    }
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

let personalData = new PersonalData('Nuria', 'Extremadouro', '05/10/1992', 'Fake St. 123', '12345', 'Madrid', '654654654', 'nuria.test@domain.com');
let employee = new Employee(personalData, 28000, 'Programmer', '1234567890', '22/03/2019', '1234567890');
let payroll = new Payroll();
payroll.printPayroll(employee.salary);