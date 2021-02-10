//dependencies declared
const path = require("path");
const fs = require("fs");

// templatesDir creates an absolute path to be used in rendering the html
const templatesDir = path.resolve(__dirname, "../src");

// the function render takes in employees as an argument and creates an empty array called html.
// from there .map and .filter methods are used to obtain the information we need to display our html page
// because render is exported as a module and used in index.js, we have access to the variables manager, engineer, and intern.
const render = employees => {
  const html = [];
  html.push(employees
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => renderManager(manager)).join("")
  );
  html.push(employees
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => renderEngineer(engineer)).join("")
  );
  html.push(employees
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => renderIntern(intern)).join("")
  );
  return renderMain(html.join(""));
};

// the following three functions use the variable template to read and interpret the corresponding html files and make an absolute path so
// each placeholder in our html files is replaced with the desired data from the objects we have created with inquire.
const renderManager = manager => {
  let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
  template = replacePlaceholders(template, "name", manager.getName());
  template = replacePlaceholders(template, "role", manager.getRole());
  template = replacePlaceholders(template, "email", manager.getEmail());
  template = replacePlaceholders(template, "id", manager.getId());
  template = replacePlaceholders(template, "managerOfficeNo", manager.getofficeNumber());
  return template;
};

const renderEngineer = engineer => {
  let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8");
  template = replacePlaceholders(template, "name", engineer.getName());
  template = replacePlaceholders(template, "role", engineer.getRole());
  template = replacePlaceholders(template, "email", engineer.getEmail());
  template = replacePlaceholders(template, "id", engineer.getId());
  template = replacePlaceholders(template, "github", engineer.getGithub());
  return template;
};

const renderIntern = intern => {
  let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf8");
  template = replacePlaceholders(template, "name", intern.getName());
  template = replacePlaceholders(template, "role", intern.getRole());
  template = replacePlaceholders(template, "email", intern.getEmail());
  template = replacePlaceholders(template, "id", intern.getId());
  template = replacePlaceholders(template, "school", intern.getSchool());
  return template;
};

// renderMain brings all of our html together into home.html
const renderMain = html => {
  const template = fs.readFileSync(path.resolve(templatesDir, "home.html"), "utf8");
  return replacePlaceholders(template, "team", html);
};

// replacePlaceHolders takes in three arguments and creates a new RegExp object which looks for the placeholders in our template
// html files and replaces them with the correct values we want to display
const replacePlaceholders = (template, placeholder, value) => {
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
  return template.replace(pattern, value);
};

module.exports = render;