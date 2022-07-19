// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const genMarkDown = require('./Develop/utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = ['What would you like the title of the prokject to be?',
    'Please provide a description of the applicaiton.',
    'Please provide a table of contents.',
    'Please provide installation requirements',
    'Please provide intended usage',
    'Please choose license type:',
    'Please included a list of contributors.',
    'Please include test data.',
    'Please provide your GitHub link',
    'Please provide your email adress.'];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    inquirer.prompt([
        {
            name: 'title',
            message: 'What would you like the title of the prokject to be?'
        },
        {
            name: 'description',
            message: 'Please provide a description of the applicaiton.'
        },
        {
            name: 'installation',
            message: 'Please provide installation requirements'
        },
        {
            name: 'usage',
            message: 'Please provide intended usage'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose license type:',
            choices: ['', '', '', '', 'none']
        },
        {
            name: 'contributors',
            message: 'Please included a list of contributors.'
        },
        {
            name: 'testData',
            message: 'Please include test data.'
        },
        {
            name: 'email',
            message: 'What is your email?'
        },
        {
            name: 'gitHub',
            message: 'What is your GitHub profile URL?'
        }
    ]).then((data) =>
        `# Title

        ${data.title}
        
        # Description
        
        ${data.description}
        
        # Installation
        
        ${data.installation}
        
        # Usage
        
        ${data.usage}
        
        # License
        
        ${data.license}
        
        # Contributors
        
        ${data.contributors}
        
        # Test Data
        
        ${data.testData}
        
        # Questions
        
        ${data.email}        
        ${data.gitHub}`

    ).then((fileName) => {
        fs.writeFile(`${fileName.title}.md`, `${fileName}`, (error) =>
        error ? console.error(error) : console.log('Success!'))
    });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
