// Node library packages
const fs = require("fs");
const inquirer = require("inquirer");

// Array of questions
inquirer.prompt([
    {
        type: "input",
        message: "What is your GitHub user name?",
        name: "userName"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "userEmail"
    },
    {
        type: "input",
        message: "What is your project Repository name?",
        name: "projectName"
    },
    {
        type: "input",
        message: "Please write a short description of your project.",
        name: "shortDescrip"
    },
    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "projectInstallation",
        default: "npm i"
    },
    {
        type: "input",
        message: "Provide instructions and examples for use.",
        name: "projectUse"
    },
    {
        type: "input",
        message: "Who worked on this project?.",
        name: "projectCredits"
    },
    {
        type: "input",
        message: "What software license do you want to use?.",
        name: "projectLicense"
    },

]).then(function(response) {

    const template =

    `# ${response.projectName}\n\n` +
    `![READle-ME-this](https://img.shields.io/github/last-commit/${response.userName}/${response.projectName})\n\n` +
    `## Description\n\n` +
    
    `${response.shortDescrip}\n\n` +
    
    `## Table of Contents\n\n` +
    
    `* [Installation](#installation)\n\n` +
    `* [Usage](#usage)\n\n` +
    `* [Credits](#credits)\n\n` +
    `* [License](#license)\n\n` +
    
    `## Installation\n\n` +
    
    `${response.projectInstallation}\n\n` +
    
    `## Usage\n\n` +
    
    `${response.projectUse}\n\n` +
    
    `## Credits\n\n` +
    
    `${response.projectCredits}\n\n` +
    
    `## License\n\n` +
    
    `${response.projectLicense}\n\n` +
    
    `## Tests\n\n` +
    
    `${response.projectTests}\n\n` +
    
    `## Questions\n\n`
    
    console.log("inquirer Success!: ", response);

    fs.writeFile("README.md", template, function(err) {

        if (err) {
            return console.log(err);
        }
        
        console.log("fs.writeFile Success!");
    
    });
 
});