/* Function that returns a license badge based on which license
is passed in. If there is no license, returns an empty string. */ 
const renderLicenseBadge = (license)  => {
  if (license === "Apache License 2.0") {
    return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
  } else if (license === "GNU General Public License v3.0") {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (license === "ISC License") {
    return `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`
  } else if (license === "MIT License") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (license === "Mozilla Public License 2.0") {
    return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`
  } else if (license === "None") {
    return "";
  };
};

/* Function that returns the license link.
If there is no license, returns an empty string. */ 
const renderLicenseLink = (license) => {
  if (license === "Apache License 2.0") {
    return `https://opensource.org/licenses/Apache-2.0`
  } else if (license === "GNU General Public License v3.0") {
    return `https://www.gnu.org/licenses/gpl-3.0`
  } else if (license === "ISC License") {
    return `https://opensource.org/licenses/ISC`
  } else if (license === "MIT License") {
    return `https://opensource.org/licenses/MIT`
  } else if (license === "Mozilla Public License 2.0") {
    return `https://opensource.org/licenses/MPL-2.0`
  } else if (license === "None") {
    return "";
  };
};

/* Function that returns the license section of README.
If there is no license, returns an empty string. */
const renderLicenseSection = (license) => {
  return `## License    
  ${license}    
  ${renderLicenseLink(license)}
  `;
};

// Function that generates markdown for README.
const generateMarkdown = (answer) => {
  return `# ${answer.title} ${renderLicenseBadge(answer.license)}  
  ## Description    
  ${answer.description}  
  ## Table of Contents  
  * [Installation](#installation)  
  * [Usage](#usage)  
  * [License](#license)  
  * [Contributing](#contributing)  
  * [Tests](#tests)  
  * [Questions](#questions)  
  ## Installation  
  ${answer.installation}  
  ## Usage  
  ${answer.usage}  
  ${renderLicenseSection(answer.license)}   
  ## Contributing  
  ${answer.contributing}  
  ## Tests  
  ${answer.tests}  
  ## Questions  
  ### GitHub:  
  [${answer.username}](https://github.com/${answer.username})  
  ### Email:  
  Please send any questions about this program to [${answer.email}](mailto:${answer.email})`;
};

module.exports = generateMarkdown;