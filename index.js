// Node library packages
const fs = require("fs");
const inquirer = require("inquirer");

// Map of license choices

const licenseChoices = new Map([
    ["MIT", "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"],
    ["Apache 2.0", "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"],
    ["Boost", "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"],
    ["BSD 3", "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"],
    ["BSD 2", "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"],
    ["Mozilla", "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"]
    ]);

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
        message: "What is your project repository name?",
        name: "projectName"
    },
    {
        type: "input",
        message: "Write a short description of your project.",
        name: "shortDescrip"
    },
    {
        type: "input",
        message: "What command(s) need to be run install your project dependencies?",
        name: "projectInstallation",
        default: "npm i"
    },
    {
        type: "input",
        message: "What command(s) can to be runfor testing?",
        name: "projectTest",
        default: "no test currently implimented"
    },
    {
        type: "input",
        message: "Are there any special requirements for using this repo?.",
        name: "projectUse",
        default: "There are no special requirements for using this repo"
    },
    {
        type: "input",
        message: "Who worked on this project?.",
        name: "projectCredits"
    },
    {
        type: "list",
        message: "What software license do you want to use?.",
        name: "projectLicense",
        choices: [...licenseChoices.keys()]
    },

]).then(function(response) {

    const template =

    `# ${response.projectName}\n\n` +
    `![READle-ME-this](https://img.shields.io/github/last-commit/${response.userName}/${response.projectName})\n\n` +
    `## Description\n\n` +
    
    `${response.shortDescrip}\n\n` +

    `## Demo\n\n` +
    
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

    fs.writeFile("NEW_README.md", template, function(err) {

        if (err) {
            return console.log(err);
        }
        
        console.log("fs.writeFile Success!");
    
    });
 
});