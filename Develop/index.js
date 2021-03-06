const inquirer = require('inquirer');
const  fs = require('fs');
// const axios = require('axios');
const formGenerator = require('./utils/generateMarkdown');


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
            type: 'input',
            name: 'installation',
            message: 'What are the installation instructions for your project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the usage of this program?'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Please pick the project license you would like to use.',
            choices: ['MIT', 'ISC', 'Zlib'],
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Who were the contributors to this project?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please give examples of test projects.',
        },
        {
            type: 'input',
            name: 'profile',
            message: 'Please provide your github profile username.',
        },
        {
            type: 'input',
            name: 'name',
            message: 'Please provide your name.'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide an email you can be reached at for questions on your project.'
        },
        {
            type: 'input',
            name: 'repository',
            message: 'Please provide your repository link.'
        },

];

// function to write README file
// function writeToFile(fileName, data) {
    inquirer.prompt(questions).then(function(data) {
            fs.appendFile('readme.md', formGenerator(data), function(err) {
            err ? console.error(err) : console.log('File Successfully Created!')
            });
    });
// }

// function to initialize program
// function init() {

// }

// function call to initialize program
// init();


// Psuedo-Code
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