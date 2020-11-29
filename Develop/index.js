const inquirer = require('inquirer');
const  fs = require('fs');


// array of questions for user
const questions = [
    
        {
            type: 'input',
            name: 'title',
            message: 'What would you like the title of the Readme.md to be?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the description of your project?',
        },
        {
            type: 'checkbox',
            name: 'table of contents',
            message: 'What would you like in your table of contents?',
            choices: ['Title', 'Description', 'Table of Contents', 'Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions'],
        },
        {
            type: 'input',
            name: 'instructions',
            message: 'What are the installation instructions for your project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the usage of this program?'
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Who were the contributors to this project?',
        },
        {
            type: 'input',
            name: 'tests',
            mesage: 'Tests?',
        },
];

// function to write README file
function writeToFile(fileName, data) {
    inquirer.prompt(questions).then((data) => {
        fs.appendFile('readme.md', JSON.stringify(data, null, '\t'), (err) =>
        err ? console.error(err) : console.log('File Created!')
    )});
}

// function to initialize program
function init() {

}

// function call to initialize program
init();


// fs.appendFile("readme.md", )

// I need to make a function to write a readme
// Maybe use fs.appendfile in order to make and write the readme
// I need to create questions about what should be on the readme
// See acceptance criteria for ideas on question substance
// Readmd is an html file apparently?
// If so then I can use different tags to make h1, h2, p, ect.. 
// I need to mae a node_modules/ and .ds_store(what is that?)
// To make node-modules I need to use npm init
// Dependency is inquirer, do I need others?
// How do I include a video of user flow?
// Include screenshots
// 