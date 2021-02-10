// the object Intern inherits properties of Employee, with additional properties and methods of its own
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, email, id, school) {
        super(name, email, id)
        this.school = school;
}

getSchool() {
    return this.school
}

getRole() {
    return 'Intern'
}
}

module.exports = Intern