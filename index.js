// items imported to build the readme
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')
//question user will answer to generate the readme data
const questions = [
    {
        type: 'input',
        message: 'What would you like to title your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter a description of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please provide installation instructions.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Describe the usage information for this project.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please provide contrubution guidelines.',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'What are the test instructions?',
        name: 'test'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Please enter your email address',
        name: 'email',
    },
    {
        type: 'list',
        message: 'What license would you like to use for your project',
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    }
];

//function that writes the data to a file 
function writeToFile(fileName, data) {
     fs.writeFileSync(fileName, data, (err) => {
        err ? console.error(err) : console.log('README created!!!')
     });
}

//function that creates the prmots at start up
function init() {
    inquirer.prompt(questions).then((userAnswers) => {
        writeToFile('ExampleREADME.md', generateMarkdown({ ...userAnswers}));
    });
}

// calls the fucntion to run at start 
init();
