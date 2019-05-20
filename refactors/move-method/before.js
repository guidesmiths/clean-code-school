// The Move Method refactor is closely related to the Extract Class. Sometimes, we need to split a class into two to keep
// the responsibilities separated. When that happens, we can end up having methods that make more sense on the new class
// than on the original one. This can be detected because the new class uses the methods more often.

// This is a continuation of the example for the Move Field refactor. We have added two new methods on Employee that calculate
// the payroll details. We have also added a Payroll class that prints the payroll details using those two methods. However, we
// can see that the new methods are only used by the Payroll class.





class Employee {
    constructor(personalData, salary, jobPosition, ssNumber, dateEnrollment, bankAccount) {
        this.personalData = personalData;
        this.salary = salary;
        this.jobPosition = jobPosition;
        this.ssNumber = ssNumber;
        this.dateEnrollment = dateEnrollment;
        this.bankAccount = bankAccount;
    }

    calculateCleanSalary() {
        var netSalary = 0;
        if (this.salary > 60000) {
            netSalary = this.salary - (12450 * 0.19) - (20000 - 12450) * 0.24 - (35200 - 20000) * 0.30 - (60000 - 35200) * 0.37 - (this.salary - 60000) * 0.45;
        } else if (60000 >= this.salary && this.salary > 35200) {
            netSalary = this.salary - (12450 * 0.19) - (20000 - 12450) * 0.24 - (35200 - 20000) * 0.30 - (this.salary - 35200) * 0.37;
        } else if (35200 >= this.salary && this.salary > 20000) {
            netSalary = this.salary - (12450 * 0.19) - (20000 - 12450) * 0.24 - (this.salary - 20000) * 0.30;
        } else if (20000 >= this.salary && this.salary > 12450) {
            netSalary = this.salary - (12450 * 0.19) - (this.salary - 12450) * 0.24;
        } else if (12450 >= this.salary) {
            netSalary = this.salary - (this.salary * 0.19);
        }
        return netSalary.toFixed(2);
    }

    calculateExtras() {
        return (1000 / 12).toFixed(2);
    }
}

class Payroll {
    printPayroll(employee) {
        console.log('/'.repeat(40) + '\n' +
                    '/'.repeat(2) + ' '.repeat(36) + '/'.repeat(2) + '\n' +
                    '/'.repeat(2) + ' '.repeat(36) + '/'.repeat(2) + '\n' +
                    '/'.repeat(2) + ' '.repeat(6) + 'PAYROLL' + ' '.repeat(23) + '/'.repeat(2) + '\n' +
                    '/'.repeat(2) + ' '.repeat(36) + '/'.repeat(2) + '\n' +
                    '/'.repeat(2) + ' '.repeat(6) + 'Gross salary: ' + employee.salary.toFixed(2) + ' '.repeat(8) + '/'.repeat(2) + '\n' +
                    '/'.repeat(2) + ' '.repeat(6) + 'Net salary: ' + employee.calculateCleanSalary() + ' '.repeat(10) + '/'.repeat(2) + '\n' +
                    '/'.repeat(2) + ' '.repeat(6) + 'Extras: ' + employee.calculateExtras() + ' '.repeat(17) + '/'.repeat(2) + '\n' +
                    '/'.repeat(2) + ' '.repeat(36) + '/'.repeat(2) + '\n' +
                    '/'.repeat(2) + ' '.repeat(36) + '/'.repeat(2) + '\n' +
                    '/'.repeat(40));
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

let personalData = new PersonalData('Nuria', 'Extremadouro', '05/10/1992', 'Fake St. 123', '12345', 'Madrid', '654654654', 'nuria.test@domain.com');
let employee = new Employee(personalData, 28000, 'Programmer', '1234567890', '22/03/2019', '1234567890');
let payroll = new Payroll();
payroll.printPayroll(employee);