// the object Engineer inherits properties of Employee, with additional properties and methods of its own
const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, email, id, github) {
    super(name, email, id);
    this.github = github
  }

  getGithub() {
    return this.github;
  }

  getRole() {
      return 'Engineer';
  }
}

module.exports = Engineer