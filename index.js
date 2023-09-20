// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// An array of questions for user input
const questions = [
    {
        message: "What is your project title?",
        name: "title",
        type: "input"
    },
    {
        message: "What is your project description?",
        name: "description",
        type: "input"
    },
    {
        message: "What are the installation instructions?",
        name: "installation",
        type: "input"
    },
    {
        message: "What are the usage instructions?",
        name: "usage",
        type: "input"
    },
    {
        message: "What is the license agreement?",
        name: "license",
        type: "list",
        choices: [
            "Apache License 2.0",
            "GNU General Public License v3.0",
            "ISC License",
            "MIT License",
            "Mozilla Public License 2.0",
            "None"
        ]
    },
    {
        message: "What are the contribution guidelines?",
        name: "contributing",
        type: "input"
    },
    {
        message: "What are the test instructions?",
        name: "tests",
        type: "input"
    },
    {
        message: "What is your GitHub username?",
        name: "username",
        type: "input"
    },
    {
        message: "What is your email address?",
        name: "email",
        type: "input"
    },
    {
        message: "Generate a README.md file with this information?",
        name: "confirm",
        type: "confirm"
    }
];

// Function that writes README file
const writeToFile = (fileName, data) => {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
};

// Function that initializes app
const init = () => {
    inquirer
        .prompt(questions)
        .then((answer) => {
            if (answer.confirm === false) {
                init();
            } else {
                console.log(`Readme file generated in ${path.join(process.cwd())}`)
                writeToFile("README.md", generateMarkdown(answer));
            };
        });
};

// Initialize app function call 
init();