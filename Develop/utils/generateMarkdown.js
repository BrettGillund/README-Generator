var licenseBadge;
var licenseLink;
// If there is no license, return an empty string
function renderLicenseBadge(data) {
// create an if statement to choose a badge url depending on their input. 
  if(data.license === 'MIT License') {
    return licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';

  }else if(data.license === 'Mozilla License') {
    return licenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]';


  }else if(data.license === 'Apache License') {
    return licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]';


  }else if(data.license === 'GNU License') {
    return licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';


  }else if(data.license === 'none') {
    return '';
  };
};

// If there is no license, return an empty string
function renderLicenseLink(data) {
// create a list of if statements with the license badge links.
if(data.license === 'MIT License') {
  return licenseLink = 'https://opensource.org/licenses/MIT';

}else if(data.license === 'Mozilla License') {
  return licenseLink = 'https://opensource.org/licenses/MPL-2.0';


}else if(data.license === 'Apache License') {
  return licenseLink = 'https://opensource.org/licenses/Apache-2.0';


}else if(data.license === 'GNU License') {
  return licenseLink = 'https://www.gnu.org/licenses/gpl-3.0';


}else if(data.license === 'none') {
  return '';
};
}


function generateMarkdown(data) {
  renderLicenseBadge(data);
  renderLicenseLink(data);
  return `# ${data.title}
    

  ${licenseBadge}
\n
## Description
  
  ${data.description}
\n
## Table of Contents
  
1. Installation.
2. Usage.
3. License.
4. Contributors.
5. Test Data.
6. Questions and Contact.
\n 
## Installation
  
  ${data.installation}
\n
## Usage
  
  ${data.usage}
\n  
## License
  
  ${data.license}
  ${licenseBadge}
  ${licenseLink}
\n       \n
## Contributors
  
  ${data.contributors}
\n  
## Test Data
  
  ${data.testData}
\n  
## Questions and Contact
  
  ${data.email}        
  ${data.gitHub}`
};

module.exports = generateMarkdown;
