// dependencies declared
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const inquirer = require('inquirer');
const fs = require('fs');

const render = require("./lib/renderhtml.js");

// promptManager is the first function called to get our application started  
// inquirer is used to prompt the user and each response is stored using the name keyword
function promptManager() {
return inquirer.prompt([
    {
      type: 'input',
      message: 'Enter the team managers name',
      name: 'name'
    },
    {
      type: 'input',
      message: 'Enter the employee ID',
      name: 'id',
      validate: function (value) {
        var valid = !isNaN(parseFloat(value));
        return valid || 'Please enter a number';
       },
    
    },
    {
      type: 'input',
      message: 'Enter manager email',
      name: 'email'
    },
    {
        type: 'input',
        message: 'Enter office number',
        name: 'managerOfficeNo',
        validate: function (value) {
            var valid = !isNaN(parseFloat(value));
            return valid || 'Please enter a number';
          },
    
    },
    {
        type: 'list',
        message: 'Select an option to move forward',
        name: 'moreOptions',
        choices: ['add an Engineer', 'add an Intern', 'finish building team']
      },
  ])

}

// inquirer is used to prompt the user and each response is stored using the name keyword
  function promptEngineer() {
      return inquirer.prompt([
    {
      type: 'input',
      message: 'Enter the engineers name',
      name: 'name'
    },
    {
      type: 'input',
      message: 'Enter the engineer ID',
      name: 'id',
      validate: function (value) {
        var valid = !isNaN(parseFloat(value));
        return valid || 'Please enter a number';
       },
    
    },
    {
      type: 'input',
      message: 'Enter engineer email',
      name: 'email'
    },
    {
        type: 'input',
        message: 'Enter engineer Github username',
        name: 'github'
      },
      {
        type: 'list',
        message: 'Select an option to move forward',
        name: 'moreOptions',
        choices: ['add an Engineer', 'add an Intern', 'finish building team']
      },
  ])
}

// inquirer is used to prompt the user and each response is stored using the name keyword
function promptIntern() {
 return inquirer.prompt([
    {
      type: 'input',
      message: 'Enter the interns name',
      name: 'name'
    },
    {
        type: 'input',
        message: 'Enter intern ID',
        name: 'id',
        validate: function (value) {
            var valid = !isNaN(parseFloat(value));
            return valid || 'Please enter a number';
          },
    
    },
    {
      type: 'input',
      message: 'Enter the intern email',
      name: 'email'
    },
    {
        type: 'input',
        message: 'Enter intern school',
        name: 'school'
      },
      {
        type: 'list',
        message: 'Select an option to move forward',
        name: 'moreOptions',
        choices: ['add an Engineer', 'add an Intern', 'finish building team']
      },
  ])
}

// team will be the array that will contain our classes with responses stored as values
const team = [];

// the createManager function takes the responses from our prompt and creates an object Manager, assigning the responses to the 
// corresponding values declared in those object classes.
// createManager also tells inquirer what to do depending on the response from the user when it reaches 'moreOptions'.
// regardless of the response, the Manager object is pushed into the array to be stored.
function createManager() {
    promptManager().then(function(response) {
        const manager = new Manager(response.name, response.email, response.id, response.managerOfficeNo)

        if(response.moreOptions == 'add an Engineer') {
            team.push(manager);
            createEngineer();
        } else if(response.moreOptions == 'add an Intern') {
            team.push(manager);
            createIntern();
        } else if(response.moreOptions == 'finish building team') {
            team.push(manager);

          // once the user chooses 'finish building team', the html file is written to the desired final destination (main.html)
            fs.writeFile("./dist/main.html", render(team), function(err) {
                if(err) throw err;
    
            });
            return;
        }
    })
}

function createEngineer() {
    promptEngineer().then(function(response) {
        const engineer = new Engineer(response.name, response.email, response.id, response.github)

        if(response.moreOptions == 'add an Engineer') {
            team.push(engineer);
            createEngineer();
        } else if(response.moreOptions == 'add an Intern') {
            team.push(engineer);
            createIntern();
        } else if(response.moreOptions == 'finish building team') {
            team.push(engineer);

            fs.writeFile("./dist/main.html", render(team), function(err) {
                if(err) throw err;
            });
            return
        }
    })
}

function createIntern() {
    promptIntern().then(function(response) {
        const intern = new Intern(response.name, response.email, response.id, response.school)

        if(response.moreOptions == 'add an Engineer') {
            team.push(intern);
            createEngineer();
        } else if(response.moreOptions == 'add an Intern') {
            team.push(intern);
            createIntern();
        } else if(response.moreOptions == 'finish building team') {
            team.push(intern);

            fs.writeFile("./dist/main.html", render(team), function(err) {
                if(err) throw err;
            });
            return
        }
    })
}

createManager();
 
