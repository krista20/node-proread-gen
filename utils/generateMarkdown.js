// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  let badge = "";
  if(data.license === "IBM Public License Version 1.0") {
    badge = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
  } else if (data.license === "Mozilla") {
    badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  } else if (data.license === "Open Database License (ODbL)") {
    badge = "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)"
  }

  return `# ${data.title}

  ${badge}

  ## Description:
  ${data.description}
  
  # Table of Contents:
  * [Installation:](#installation:)
  * [Usage:](#usage)
  * [License:](#license)
  * [Contribution:](#contribution)
  * [Questions:](#questions)
  
  ### Installation:
    If not done so already, please install the dependencies needed in order to create a
    professional README.md by following the below requirements:
  ${data.installation}
  ## Usage:
  ${data.usage}

  Please reference below:

  Install Node:
  https://nodejs.dev/download/
  ![](/assets/images/install_node.png)

  Install & Require Inquirer:
  https://www.npmjs.com/package/inquirer
  ![](/assets/images/install_inquirer.png)
  ![](/assets/images/require_inquirer.png)

  Require fs module:
  https://nodejs.dev/learn/the-nodejs-fs-module
  ![](/assets/images/node.js_fs_module.png)


  ## License:
  This license is covered under:
  ${data.license}
  ## Contribution:
  ${data.contribution}  
  ## Test:
  ${data.test}
  ## Questions: 
  GitHub link: ${data.username}  
  For any questions, please reach out to me at ${data.email}
  `;}

module.exports = generateMarkdown;