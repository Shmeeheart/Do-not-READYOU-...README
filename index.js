// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a description of the project',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please select the license you used for this project.',
    choices: ['MIT', 'BSD', 'GPL', 'Apache', 'None'],
    validate: (license) => {
      if (license) {
        return true;
      } else {
        console.log('You must select a license');
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide technologies used',
  },
  {
    type: 'input',
    name: 'contributors',
    message: 'Please provide a list of contributors to the project',
  },
  {
    type: 'input',
    name: 'test',
    message: 'Insert test instructions here:',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Type in your Github Username',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Type in your email address',
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
