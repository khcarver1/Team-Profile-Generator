// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  #project title 
  ${data.title}
  ##Description
  ${data.description}
  ##Table of Contents
  "Description, Installation, Usage, License, Contributing, Tests, and Questions" 
  ##Installation
  ${data.installation}
  ##Usage
  ${data.solution}
  ##Tests
  ${data.Tests}
  ##Questions
  ${data.Questions}
  ${"https://github.com/" + data.GHuser}
  ${"I can be reached via email at " + data.emailaddy}
  ##Contributing
  ${data.credit}
  ##License
  ${data.license}
`;
}

module.exports = generateMarkdown;
