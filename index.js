// Node library packages
const fs = require("fs");
const inquirer = require("inquirer");
const dotenv = require("dotenv");

const template

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
        name: "projectInstallation"
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

    console.log("inquirer Success!: ", response);

    fs.writeFile("README.md", response, function(err) {

        if (err) {
            return console.log(err);
        }
        
        console.log("fs.writeFile Success!");
    
    });
 
});


// function init() {

// }

// init();
