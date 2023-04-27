// The packages required to run this which include inquirer and fs promises
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;


// These are all of the prompts that are asked to collect information for the README file your trying to create
const userPrompts = () => {
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
      choices: ['MIT', 'ISC', 'CC', 'GPL', 'WTFPL']
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


// This is the README format that all of the info from the above prompts gets plugged into and is also what renders in the newly created file 
const generateMarkdown = ({title, description, installation, usage, license, contributors, tests, questions, github, email}) =>
 `# ${title}

  [![license](https://img.shields.io/badge/license-${license}-blue.svg)](https://shields.io/)
  
  ## Description 
  - ${description}

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


// Function to initialize app which writes to the demoREADME file and logs if it was a success or if there was an error
const init = () => {
  userPrompts()
  .then((data) => writeFile('./demo/demoREADME.md', generateMarkdown(data)))
  .then(() => console.log('Successfully generated your README.md'))
  .catch((err) => console.error(err));
};


// Function call to initialize app
init();