const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const generateHtml = require("./src/generate");

const questions = [
  {
    type: "input",
    name: "managerName",
    message: "Enter manager's name.",
  },
  {
    type: "input",
    name: "managerId",
    message: "Enter manager's Id.",
  },
  {
    type: "input",
    name: "email",
    message: "Enter manager's Email Address.",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Enter manager's office Number.",
  },
];

const managers = [];
const engineers = [];
const interns = [];

function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "InternName",
        message: "Enter Intern's name.",
      },
      {
        type: "input",
        name: "InternId",
        message: "Enter Intern's Id.",
      },
      {
        type: "input",
        name: "InternEmail",
        message: "Enter Intern's Email.",
      },
      {
        type: "input",
        name: "InternSchool",
        message: "Enter Intern's School name.",
      },
    ])
    .then(({ InternName, InternId, InternEmail, InternSchool }) => {
      const i = new Intern(InternName, InternId, InternEmail, InternSchool);
      interns.push(i);
      // then show the menu option again
      showOperationOptions();
    });
}

function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "EngineerName",
        message: "Enter Engineer's name.",
      },
      {
        type: "input",
        name: "EngineerId",
        message: "Enter Engineer's Id.",
      },
      {
        type: "input",
        name: "EngineerEmail",
        message: "Enter Engineer's Email.",
      },
      {
        type: "input",
        name: "EngineerGithub",
        message: "Enter Engineer's Github username.",
      },
    ])
    .then(({ EngineerName, EngineerId, EngineerEmail, EngineerGithub }) => {
      const e = new Engineer(
        EngineerName,
        EngineerId,
        EngineerEmail,
        EngineerGithub
      );
      engineers.push(e);

      // then show the menu option again
      showOperationOptions();
    });
}

function showOperationOptions() {
  inquirer
    .prompt([
      {
        type: "rawlist",
        name: "operation",
        message: "What do you want to do next?",
        choices: ["Add an Engineer", "Add an Intern", "Done"],
      },
    ])
    .then((a) => {
      // show the questions for the operation
      switch (a.operation) {
        case "Add an Engineer":
          addEngineer();
          break;
        case "Add an Intern":
          addIntern();
          break;
        case "Done":
          // once we are done getting input from the user
          generateHtml(managers, engineers, interns);
          break;
      }
    });
}

function init() {
  inquirer
    .prompt(questions)
    .then(({ managerName, managerId, email, officeNumber }) => {
      // create a manager object based on the answer
      const manager = new Manager(managerName, managerId, email, officeNumber);
      managers.push(manager);
      showOperationOptions();
    });
}
init();
