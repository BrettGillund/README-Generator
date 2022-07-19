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

// prompts for the user to fill in.
    inquirer.prompt([
        {
            name: 'title',
            message: `${questions[0]}`
        },
        {
            name: 'description',
            message: `${questions[1]}`
        },
        {
            name: 'tableOfContents',
            message: `${questions[2]}`
        },
        {
            name: 'installation',
            message: `${questions[3]}`
        },
        {
            name: 'usage',
            message: `${questions[4]}`
        },
        {
            type: 'list',
            name: 'license',
            message: `${questions[5]}`,
            choices: ['', '', '', '', 'none']
        },
        {
            name: 'contributors',
            message: `${questions[6]}`
        },
        {
            name: 'testData',
            message: `${questions[7]}`
        },
        {
            name: 'email',
            message: `${questions[8]}`
        },
        {
            name: 'gitHub',
            message: `${questions[9]}`
        }
    ]).then((data) => // the format of the written README document.
        `# Title

        ${data.title}
        
        ## Description
        
        ${data.description}

        ## Table of Contents
        
        ${data.tableOfContents}
        
        ## Installation
        
        ${data.installation}
        
        ## Usage
        
        ${data.usage}
        
        ## License
        
        ${data.license}
        
        ## Contributors
        
        ${data.contributors}
        
        ## Test Data
        
        ${data.testData}
        
        ## Questions
        
        ${data.email}        
        ${data.gitHub}`

    ).then((fileName) => { // creates the file and sets up the user in case there is an error.
        fs.writeFile(`README.md`, `${fileName}`, (error) =>
        error ? console.error(error) : console.log('Success!'))
    });



// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    // what do they mean by initalizing the application?
    writeToFile;
}

// Function call to initialize app
init();
