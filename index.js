const inquirer = require("inquirer");
const Manager = require("./lib/manager");

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

const allAnswers = [];

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
    .then((a) => {
      console.log(a);
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
        name: "EngineergGithub",
        message: "Enter Engineer's Github username.",
      },
    ])
    .then((a) => {
      console.log(a);
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
      if (a.operation != "Done") {
        // show the questions for the operation
        switch (a.operation) {
          case "Add an Engineer":
            addEngineer();
            break;
          case "Add an Intern":
            addIntern();
            break;
        }
      }
    });
}

function init() {
  inquirer
    .prompt(questions)
    .then(({ managerName, managerId, email, officeNumber }) => {
      // create a manager object based on the answer
      const manager = new Manager(managerName, managerId, email, officeNumber);
      allAnswers.push(manager);
      showOperationOptions();
    });
}
init();
