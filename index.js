// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const licenses = ['None', 'MIT', 'BSD', 'GPL', 'Apache'];

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'project-title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a description of the project',
  },
  {
    type: 'input',
    name: 'table-of-contents',
    message: 'Insert a Table of Contents',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide installation instructions',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide usage information',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Please provide a list of contributors to the project',
  },
  {
    type: 'input',
    name: 'test',
    message: 'Insert test here',
  },
  {
    type: 'input',
    name: 'questions',
    message:
      'Enter your GitHub username with link to your GitHub profile, email address and instructions on how to reach you with additional questions',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log('Complete!');
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile('README.md', generateMarkdown({ ...answers }));
  });
}

// Function call to initialize app
init();
