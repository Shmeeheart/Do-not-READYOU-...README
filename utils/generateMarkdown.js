// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'apache') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license == 'mit') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license == 'gpl') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else {
    return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'apache') {
    return `[Apache Software License](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license == 'mit') {
    return `[MIT Software License](https://opensource.org/licenses/MIT)`;
  } else if (license == 'gnu') {
    return `[GNU Software License](https://www.gnu.org/licenses/gpl-3.0)`;
  } else {
    return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let badge = renderLicenseBadge(license);
  let link = renderLicenseLink(license);
  return `${badge}<br>The license used for this project is the ${license} license. For additional information click here: ${link}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## License
  ${renderLicenseSection(data.license)}

  ## Table of Contents
    -[Installation] (#installation)
    -[Usage] (#usage)
    -[Contributors] (#contributors)
    -[Test] (#test)
    -[Questions] (#questions);

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributors
  ${data.contributors}

  ## Test
  ${data.test}

  ## Questions
  GitHub profile link below: </br>
  https://github.com/${data.github}
  <br>
  Feel free to email me as well: 
  ${data.email}
  </br>`;
}

module.exports = generateMarkdown;
