// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if (license != 'None') {
    badge = '![License Badge] (https://shields.io/badge/license';
  }

  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;

  switch (license) {
    case 'MIT':
      licenseLink = 'https://mit-license.org/';
      break;
    case 'BSD':
      licenseLink = 'https://opensource.org/licenses/BSD-3-Clause';
      break;
    case 'GPL':
      licenseLink = 'https://www.gnu.org/licenses/gpl-3.0.en.html';
      break;
    case 'Apache':
      licenseLink = 'https://www.apache.org/licenses/LICENSE-2.0.html';
      break;
    default:
      licenseLink = '';
      break;
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  licenseSection = '';

  if (license != 'None') {
    licenseSection += '##License/n';
    licenseSection +=
      'Please see' +
      renderLicenseLink(license) +
      ' to get detailed information for this license\n';
  }
  return licenseSection;
}

function renderTable(tableofcontents) {
  if (tableofcontents) {
    return `## Table of Contents
    -[Installation] (#installation)
    -[Usage] (#usage)
    -[Contributors] (#contributors)
    -[Test] (#test)
    -[Questions] (#questions)`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}
  ## License
  ${data.license}
  ${renderTable(data.tableofcontents)}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributors
  ${data.contributors}
  ## Test
  ${data.test}
  ## Questions
  You can check out my GitHub link below: </br>
  https://github.com/${data.github}
  <br>
  ${data.email}
  </br>`;
}

module.exports = generateMarkdown;
