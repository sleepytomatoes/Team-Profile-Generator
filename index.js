const Employee = require('./Employee');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');
const inquirer = require('inquirer');
const fs = require('fs');
const menuChoices = ['add an Engineer', 'add an Intern', 'finish building team']

promptManager = () => {
inquirer.prompt([
    {
      type: 'input',
      message: 'Enter the team managers name',
      name: 'managerName'
    },
    {
      type: 'input',
      message: 'Enter the employee ID',
      name: 'managerID'
    },
    {
      type: 'input',
      message: 'Enter manager email',
      name: 'managerEmail'
    },
    {
        type: 'input',
        message: 'Enter office number',
        name: 'managerOfficeNo'
      },
      {
        type: 'checkbox',
        message: 'Select an option to move forward',
        name: 'managerOptions',
        choices: menuChoices
      },
  ])

}


  promptEngineer = () => {
      return inquirer.prompt([
    {
      type: 'input',
      message: 'Enter the engineers name',
      name: 'engineerName'
    },
    {
      type: 'input',
      message: 'Enter the engineer ID',
      name: 'engineerID'
    },
    {
      type: 'input',
      message: 'Enter engineer email',
      name: 'engineerEmail'
    },
    {
        type: 'input',
        message: 'Enter engineer Github username',
        name: 'engineerGithub'
      },
      {
        type: 'checkbox',
        message: 'Select an option to move forward',
        name: 'managerOptions',
        choices: menuChoices
      },
  ])
}

promptIntern = () => {
 inquirer.prompt([
    {
      type: 'input',
      message: 'Enter the interns name',
      name: 'internName'
    },
    {
        type: 'input',
        message: 'Enter intern ID',
        name: 'internID'
      },
    {
      type: 'input',
      message: 'Enter the intern email',
      name: 'internEmail'
    },
    {
        type: 'input',
        message: 'Enter intern school',
        name: 'internSchool'
      },
      {
        type: 'checkbox',
        message: 'Select an option to move forward',
        name: 'managerOptions',
        choices: menuChoices,
      },
  ])
}

 
