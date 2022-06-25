// const ibm = ![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg), (https://opensource.org/licenses/IPL-1.0)

// const badge = 



// IBM Public License Version 1.0
// License: IPL 1.0
// [![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)

// mozilla
// [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)


// Open Database License (ODbL)
// License: ODbL
// [![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description:
  ${data.description}
  
  ## Table of Contents:
    - Installation
    - Usage
    - License
    - Contribution
    - Questions
  
  ### Installation:
    If not done so already, please install the dependencies needed in order to create a
    professional README.md by following the below requirements:
  ${data.installation}
  ### Usage:
  ${data.usage}
  ### License:
  ${data.license}
  ### Contribution:
  ${data.contribution}  
  ### Tests:
  ${data.test}
  ### Questions: 
  GitHub link: ${data.username}  
  For any questions, please reach out to me at ${data.email}
  `;}

module.exports = generateMarkdown;


// + `<p> ${data.description}</p>` + `<p> ${data.installation}</p>` + 
//   `<p> ${data.usage}</p>` + `<p> ${data.contribution}</p>` + `<p> ${data.test}</p>` + 
//   `<p> ${data.instructions}</p>` + `${data.username}`;


// IBM Public License Version 1.0
// License: IPL 1.0
// [![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)

// mozilla
// [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)


// Open Database License (ODbL)
// License: ODbL
// [![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)