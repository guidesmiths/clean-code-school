// The Move Field refactor is closely related to the Extract Class. Sometimes, we need to split a class into two to keep
// the responsibilities separated. When that happens, we can end up having fields that make more sense on the new class
// than on the original one. This can be detected because the methods on the new class use the fields more often.

// In this example, we have the class Employee that has all the data from an employee and the class PersonalData that returns
// the full name, full address and contact info of a given employee. We can see that the PersonalData uses many of the fields from
// Employee inside its methods and it would also make sense to just have those fields inside of it to keep the responsibilities
// fully separated.




class Employee {
    constructor(name, lastName, dateOfBirth, street, postalCode, city, phone, email, jobPosition, ssNumber, dateEnrollment, bankAccount) {
        this.name = name;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.street = street;
        this.postalCode = postalCode;
        this.city = city;
        this.phone = phone;
        this.email = email;
        this.jobPosition = jobPosition;
        this.ssNumber = ssNumber;
        this.dateEnrollment = dateEnrollment;
        this.bankAccount = bankAccount;
    }
}

class PersonalData {
    getFullName(employee) {
        return 'Employee: ' + employee.name + ' ' + employee.lastName;
    }

    getFullAddress(employee) {
        return 'Address: ' + employee.street + ', C.P.: ' + employee.postalCode + ', ' + employee.city;
    }

    getContactInfo(employee) {
        return 'Email: ' + employee.email + ' - Phone: ' + employee.phone;
    }

    printPersonalCard(employee) {
        console.log('/'.repeat(70) + '\n' +
                    '/'.repeat(2) + ' '.repeat(66) + '/'.repeat(2) + '\n' +
                    '/'.repeat(2) + ' '.repeat(66) + '/'.repeat(2) + '\n' +
                    '/'.repeat(2) + ' '.repeat(6) + 'PERSONAL DATA' + ' '.repeat(47) + '/'.repeat(2) + '\n' +
                    '/'.repeat(2) + ' '.repeat(66) + '/'.repeat(2) + '\n' +
                    '/'.repeat(2) + ' '.repeat(6) + personalData.getFullName(employee) + ' '.repeat(24) + '/'.repeat(2) + '\n' +
                    '/'.repeat(2) + ' '.repeat(6) + personalData.getFullAddress(employee) + ' '.repeat(18) + '/'.repeat(2) + '\n' +
                    '/'.repeat(2) + ' '.repeat(6) + personalData.getContactInfo(employee) + ' '.repeat(13) + '/'.repeat(2) + '\n' +
                    '/'.repeat(2) + ' '.repeat(66) + '/'.repeat(2) + '\n' +
                    '/'.repeat(2) + ' '.repeat(66) + '/'.repeat(2) + '\n' +
                    '/'.repeat(70));
    }
}

let personalData = new PersonalData();
let employee = new Employee('Nuria', 'Extremadouro Mayoral', '05/10/1992', 'Fake St. 123', '12345', 'Madrid', '654654654', 'nuria.test@domain.com', 'Programmer', '1234567890', '22/03/2019', '1234567890');
personalData.printPersonalCard(employee);