// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Description 
  ${data.description}`
  };


  if (data.toc !== '') {
  `## Table of Contents
  ${data.toc}
  * [Installation](#installation)
  * [Usage](#usage) 
  * [Contributing](#contributing)
  * [Tests](#tests)`
  };
  

  if (data.installation !== '') {
  `## Installation
  ${data.installation}`
  };


  if (data.usage !== '') {
  `## Usage 
  ${data.usage}`
  };


  if (data.license !== '') {
  `## License
  ${data.license}
  * [License](#license)`
  };


  if (data.contributors !== '') {
  `## contributors
  ${data.contributors}`
  };


  if (data.tests !== '') {
  `## Tests
  ${data.tests}`
  };


  if (data.questions !== '') {
  `## Questions?
  ${data.questions}`
  };


module.exports = generateMarkdown;