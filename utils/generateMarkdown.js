// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
      case 'APACHE 2.0':
       return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
      case 'GPL 3.0':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
      case 'BSD 3':
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
      break;
      deafult:
      return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return `<a href = "https://www.mit.edu/~amini/LICENSE.md">MIT License</a>`;
      break;
      case 'APACHE 2.0':
       return `<a href = "https://www.apache.org/licenses/LICENSE-2.0">APACHE 2.0</a>`;
      case 'GPL 3.0':
      return `<a href = "https://www.gnu.org/licenses/gpl-3.0.en.html">GPL 3.0</a>`;
      break;
      case 'BSD 3':
      return `<a href = "https://choosealicense.com/licenses/bsd-3-clause/">BSD 3</a>`;
      break;
      deafult:
      return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}                           ${renderLicenseBadge(data.license)}

  # Table of Contents                                                
  <a href="#description">Description</a>
  \n<a href="#installation">Installation</a>
  \n<a href="#usage">Usage</a>
  \n<a href="#license">License</a>
  \n<a href="#contributing">Contributing</a>
  \n<a href="#tests">Tests</a>
  \n<a href="#questions">Questions</a>

# <h2 id='description'>Description</h2>
  ${data.description}



## <h2 id='installation'>Installation</h2>
  ${data.installation}

## <h2 id='usage'>Usage</h2>
  ${data.usage}

## <h2 id='license'>License</h2>
${renderLicenseBadge(data.license)} For more infomation about the license plsease click:
${renderLicenseLink(data.license)}

## <h2 id='contributing'>Contributing</h2>
  ${data.contributing}

## <h2 id='tests'>Tests</h2>
  ${data.test}

### <h2 id='questions'>Questions</h2>
  <a href="https://github.com/${data.username}"> ${data.username} GitHub profile</a> 
  \n${data.email}: Please feel free to reach out to me with any questions at the provided email.
`;
}

module.exports = generateMarkdown;
