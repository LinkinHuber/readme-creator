// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
//const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
  const promptUser = () => {
    return inquirer.prompt([
  {
    type: 'input',
    name: 'title',
    message: 'Enter a project title',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a project description',
  },
  {
    type: 'input',
    name: 'toc',
    message: 'Optional, enter a table of contents',
  },
  {
    type: 'input',
    name: 'istallation',
    message: 'Optional, enter installation instructions',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Optional, enter the usage',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Optional, select a license',
    choices: ['License: MIT', 'License: Apache 2.0', 'License: GPL-3.0']
  },
  {
    type: 'input',
    name: 'contributors',
    message: 'Optional, who are the contributors?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Optional, enter some tests',
  },
  {
    type: 'input',
    name: 'questions',
    message: 'Optional, enter some questions',
  },
]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}


// TODO: Create a function to initialize app
  const init = () => {
    promptUser()
      // Use writeFile method imported from fs.promises to use promises instead of
      // a callback function
      .then((data) => writeFile('demoREADME.md', writeToFile(data)))
      .then(() => console.log('Successfully generated your README.md'))
      .catch((err) => console.error(err));
  };

// Function call to initialize app
init();