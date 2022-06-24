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
        name: 'username',
        message: "What is your GitHub username?",
     },
     {
        type: 'input',
        name: 'email',
        message: "What is your email address?",
     }
    // // title of project
    // "What is the title of your project?",
    // // Info added to: Description, Installation, Usage, Contributing, & Tests
    // "Enter a description for your project.",
    // "Enter installation instructions",
    // "Enter usage information",
    // "Enter contribution guidelines",
    // "Enter test instructions",
  
    // // Questions Section: for GitHub username link
    // "Enter your GitHub username",
    // "Enter your email address"

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
                console.log("file create successfully")
            }
        })
        console.log(template);
    })
}

// Function call to initialize app
init();
