// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;


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
      name: 'installation',
      message: 'Enter installation instructions',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How do you use this app?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Select a license',
      choices: ['License: MIT', 'License: Apache 2.0', 'License: GPL-3.0']
    },
    {
      type: 'input',
      name: 'contributors',
      message: 'Are there any contributors?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter some tests',
    },
    {
      type: 'input',
      name: 'questions',
      message: 'Instructions on how to reach me if theres questions',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your github username',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email',
    },
  ]);
};


// TODO: Create a function to write README file
const generateMarkdown = ({title, description, installation, usage, license, contributors, tests, questions, github, email}) =>
 `# ${title}
  
  ## Description 
  - ${description}

  ## License:
  [![license](https://img.shields.io/badge/license-${license}-blue.svg)](https://shields.io/)

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage) 
  * [Contributors](#contributors)
  * [Tests](#tests)
  
  ## Installation
  - ${installation}

  ## Usage 
  - ${usage}

  ## License
  - ${license}

  ## Contributors
  - ${contributors}

  ## Tests
  - ${tests}

  ## Questions?
  - ${questions}
  - Github: [${github}](https://github.com/${github})
  - Email: ${email}`


// TODO: Create a function to initialize app
  const init = () => {
    promptUser()
    .then((data) => writeFile('./demo/demoREADME.md', generateMarkdown(data)))
    .then(() => console.log('Successfully generated your README.md'))
    .catch((err) => console.error(err));
  };


// Function call to initialize app
init()