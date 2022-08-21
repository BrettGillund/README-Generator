// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const genMarkDown = require('./Develop/utils/generateMarkdown');



// TODO: Create an array of questions for user input
const questions = ['What would you like the title of the prokject to be?',
    'Please provide a description of the applicaiton.',
    'Please provide installation requirements',
    'Please provide intended usage',
    'Please choose license type:',
    'Please included a list of contributors.',
    'Please include test data.',
    'Please provide your GitHub link',
    'Please provide your email adress.'];






// TODO: Create a function to write README file
function writeToFile(fileData) {
     // the format of the written README document.
     // creates the file and sets up the user in case there is an error.
        fs.writeFile(`README.md`, fileData, (error) =>
        error ? console.error(error) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() {
    // prompts for the user to fill in.
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: `${questions[0]}`,
            validate: (value)=>{ if(value){return true} else {return 'Please enter a value in the title section.'}},
        },
        {
            name: 'description',
            message: `${questions[1]}`
        },
        {
            type: 'input',
            name: 'installation',
            message: `${questions[2]}`,
            validate: (value)=>{ if(value){return true} else {return 'Please enter a value in the installation section.'}},

        },
        {
            type: 'input',
            name: 'usage',
            message: `${questions[3]}`,
            validate: (value)=>{ if(value){return true} else {return 'Please enter a value in the usage section.'}},

        },
        {
            type: 'list',
            name: 'license',
            message: `${questions[4]}`,
            choices: ['MIT License', 'Mozilla License', 'Apache License', 'GNU License', 'none'],
        },
        {
            type: 'input',
            name: 'contributors',
            message: `${questions[5]}`,
            validate: (value)=>{ if(value){return true} else {return 'Please enter a value in the contributors section.'}},
        },
        {
            type: 'input',
            name: 'testData',
            message: `${questions[6]}`,
            validate: (value)=>{ if(value){return true} else {return 'Please enter a value in the test data section.'}},
        },
        {
            type: 'input',
            name: 'email',
            message: `${questions[7]}`,
            validate: (value)=>{ if(value){return true} else {return 'Please enter a value in the email section.'}},

        },
        {
            type: 'input',
            name: 'gitHub',
            message: `${questions[8]}`,
            validate: (value)=>{ if(value){return true} else {return 'Please enter a value in the GitHub section.'}},

        }
    ]).then(genMarkDown).then(writeToFile);

}

// Function call to initialize app
init();
