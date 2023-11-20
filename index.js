// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');
// TODO: Create an array of questions for user input

const licenseChoices = [
  { name: 'No License', value: 'none' },
  { name: 'MIT License', value: 'MIT', badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'},
  { name: 'Apache License 2.0', value: 'Apache-2.0', 
      badge: "[![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)" },
  { name: 'GNU GPLv3', value: 'GPL-3.0',
      badge: "[![License: GPL-3.0](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)" },
  { name: 'BSD 3-Clause License', value: 'BSD-3-Clause',
      badge: "[![License: BSD-3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)" },
  { name: 'Mozilla Public License 2.0', value: 'MPL-2.0',
      badge: "[![License: MPL-2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)" },
  { name: 'Creative Commons Attribution 4.0 International', value: 'CC-BY-4.0',
      badge: "[![License: CC-BY-4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/by/4.0/)" },
  { name: 'The Unlicense', value: 'Unlicense',
      badge: "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)" },
  
];



inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'what is the description of your project?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Describe the steps to install your application',
      
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is the intended usage for your application?',
      
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your application',
      choices: licenseChoices,
      transformer: (choice) => choice.value,
      
    },
    {
      type: 'input',
      name: 'contributors',
      message: 'List the names of your contributors.',
      
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Explain the tests you have completed for your application.',
      
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your github userName',
      
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email',
      
    },
  ])
  .then((data) => {
    const selectedLicense = licenseChoices.find(
      (choice) => choice.value === data.license);
      data.badge = selectedLicense.badge;
      

    const filename = `./outputContent/${data.title.toLowerCase().split(' ').join('')}.md`;
    const markdownContent = generateMarkdown(data);

    fs.writeFile(filename, markdownContent, (err) =>
    err ? console.log(err) : console.log('Success!')
    );
    
    generateMarkdown(data)
  });