// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMark = require('./utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is the title of your project?", 
     },
     {
        type: 'input',
        name: 'description',
        message: "What is the description for your project?",
     },
     {
        type: 'input',
        name: 'installation',
        message: "What are the installation instructions for your project?",
     },
     {
        type: 'input',
        name: 'usage',
        message: "What is the usage information?",
     },
     {
        type: 'list',
        name: 'license',
        message: "Which license(s) does your project have?",
        choices: ["IBM Public License Version 1.0", "Mozilla", 
        "Open Database License (ODbL)", "None"]
     },
     {
        type: 'input',
        name: 'contribution',
        message: "What are the contribution guidelines?",
     },
     {
        type: 'input',
        name: 'test',
        message: "What are the test instructions?",
     },
     {
        type: 'input',
        name: 'username',
        message: "What is your GitHub username?",
     },
     {
        type: 'input',
        name: 'email',
        message: "What is your email address?",
     }
];

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
        var template = generateMark(answers)
        fs.writeFile('README.md', template, (err) => {
            if(err) {
                // throw or to return
                throw err
            } else {
                console.log("file created successfully")
            }
        })
        console.log(template);
    })
}

// Function call to initialize app
init();
