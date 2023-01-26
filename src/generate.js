const createHTMLFile = require("./createFile");

let htmlText;

function addHtmlInit() {
  htmlText = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="styles.css" />
    <title>Team Information</title>
  </head>
  <body>
  <main class="container-fluid">
      <header class="header">My Team</header>
      <div class="container-fluid my-4 d-flex gap-4 flex-row flex-wrap">
  `;
}

function addManagerCard(managers) {
  const manager = managers[0];

  const managerText = `<div class="card">
  <div class="card-header">
    <h5 class="card-title">${manager.getName()}</h5>
    <h6 class="card-subtitle mb-2">${manager.getRole()}</h6>
  </div>
  <div class="card-body">
    <div class="card-text p-4">
      <ul class="list-group">
        <li class="list-group-item">id: ${manager.getId()}</li>
        <li class="list-group-item">
          Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
        </li>
        <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
      </ul>
    </div>
  </div>
</div>
  `;

  // adding manager card to already existing html header text
  htmlText = `${htmlText}
${managerText}
  `;
}

function addEngineers(engineers) {
  for (let i = 0; i < engineers.length; i++) {
    const engineer = engineers[i];

    const engineerText = `<div class="card">
    <div class="card-header">
      <h5 class="card-title">${engineer.getName()}</h5>
      <h6 class="card-subtitle mb-2">${engineer.getRole()}</h6>
    </div>
    <div class="card-body">
      <div class="card-text p-4">
        <ul class="list-group">
          <li class="list-group-item">id: ${engineer.getId()}</li>
          <li class="list-group-item">
            Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
          </li>
          <li class="list-group-item">
          Github: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a>
        </li>
        </ul>
      </div>
    </div>
  </div>
  `;

    // adding engineer card to already existing html
    htmlText = `${htmlText}
    ${engineerText}
    `;
  }
}

function addInterns(interns) {
  for (let i = 0; i < interns.length; i++) {
    const intern = interns[i];

    const internText = `<div class="card">
    <div class="card-header">
      <h5 class="card-title">${intern.getName()}</h5>
      <h6 class="card-subtitle mb-2">${intern.getRole()}</h6>
    </div>
    <div class="card-body">
      <div class="card-text p-4">
        <ul class="list-group">
          <li class="list-group-item">id: ${intern.getId()}</li>
          <li class="list-group-item">
            Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a>
          </li>
          <li class="list-group-item">
            School: ${intern.getSchool()}
          </li>
        </ul>
      </div>
    </div>
  </div>
  `;

    // adding engineer card to already existing html
    htmlText = `${htmlText}
    ${internText}
    `;
  }
}

function addHTMLClose() {
  htmlText = `${htmlText}

      </div>
    </main>
  </body>
</html>
  `;
}

function generateHtml(managers, engineers, interns) {
  addHtmlInit();
  addManagerCard(managers);
  addEngineers(engineers);
  addInterns(interns);
  addHTMLClose();
  createHTMLFile(htmlText);
}

module.exports = generateHtml;
