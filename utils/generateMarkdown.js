
// const badgeOne = [![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0);
// const badgeTwo = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
// const badgeThree = '[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)';

// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {
  
// }

// // license = [
// // "IBM Public License Version 1.0", 
// // "Mozilla", 
// // "Open Database License (ODbL)"];

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//   // badgeOne = "IBM Public License Version 1.0";
//   // badgeTwo = "Mozilla";
//   // badgeThree = "Open Database License (ODbL)";
  
//   if ("IBM Public License Version 1.0" === badgeOne) 
//   {
//     return badgeOne
//   } 
//   if("Mozilla" === badgeTwo) {
//     return badgeTwo;
//   }
//   if("Open Database License (ODbL)" === badgeThree) {
//     return badgeThree;
//   }
//   else {
//     return " ";
//   };
// };

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
   
// }

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

  ### License:
  ${data.license}
  ### Contribution:
  ${data.contribution}  
  ### Test:
  ${data.test}
  ### Questions: 
  GitHub link: ${data.username}  
  For any questions, please reach out to me at ${data.email}
  `;}

// renderLicenseBadge(license);
module.exports = generateMarkdown;


// // IBM Public License Version 1.0
// // License: IPL 1.0
// // [![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)

// // mozilla
// // [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)


// // Open Database License (ODbL)
// // License: ODbL
// // [![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)


// const badgeOne = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
// const badgeTwo = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
// const badgeThree = '[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)';

// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {
  
// }

// // license = [
// // "IBM Public License Version 1.0", 
// // "Mozilla", 
// // "Open Database License (ODbL)"];

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink() {
//   // badgeOne = "IBM Public License Version 1.0";
//   // badgeTwo = "Mozilla";
//   // badgeThree = "Open Database License (ODbL)";
  
//   if ("IBM Public License Version 1.0" === badgeOne) 
//   {
//     return badgeOne
//   } 
//   if("Mozilla" === badgeTwo) {
//     return badgeTwo;
//   }
//   if("Open Database License (ODbL)" === badgeThree) {
//     return badgeThree;
//   }
//   else {
//     return " ";
    
  
//   };

//   // badgeOne = `${data.choices[0]}`;
//   // badgeTwo = `${data.choices[1]}`;
//   // badgeThree = `${data.choices[2]}`;
//   // license = `${data.choices[0, 1, 2, 3]}`;
//   // if (`${data.license}` != `${data.choices[0, 1, 2]}`) 
//   // {
//   //   return " "
//   // } 
//   // if(`${data.license}` === badgeOne || badgeTwo || badgeThree) {
    
//   // }
// };

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {

// }

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   renderLicenseLink(data.license);
//   var badge = renderLicenseLink(badgeOne, badgeTwo, badgeThree, " ");
//   // var two = renderLicenseLink(badgeTwo);
//   // var three = renderLicenseLink(badgeThree);
//   // var four = renderLicenseLink("");