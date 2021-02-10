// the object Manager inherits properties of Employee, with additional properties and methods of its own
const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, email, id, officeNumber) {
        super(name, email, id)
        this.officeNumber = officeNumber;
}

getofficeNumber() {
    return this.officeNumber;
}

getRole() {
    return 'Manager';
}
}

module.exports = Manager