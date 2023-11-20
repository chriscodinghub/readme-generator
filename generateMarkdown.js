// Function to render the license badge
function renderLicenseBadge(data) {
  if (data) {
    // console.log(data.badge)
    // Return the license badge based on the license value
    return data.badge;
    
  }
  // Return an empty string if there is no license
  return '';
}

// Function to render the license link
function renderLicenseLink(license) {
  if (license) {
    // Return the license link based on the license value
    return `[License](#license)`;
  }
  // Return an empty string if there is no license
  return '';
}

// Function to render the license section of the README
function renderLicenseSection(license) {
  if (license) {
    // Return the license section with the license value
    return `## License

This project is licensed under the ${license} license.`;
  }
  // Return an empty string if there is no license
  return '';
}




// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data);
  const licenseSection = renderLicenseSection(data.license);

  const markdownContent = 
  `
# ${data.title}

<br>

${licenseBadge}

## Table of Contents
+ [Desciption](#description)
+ [Installation](#installation)
+ [Usage](#usage)
+ [License](#license)
+ [Contributors](#contributors)
+ [Tests](#tests)
+ [Questions](#questions)


## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}


${licenseSection}


## Contributors
${data.contributors}

## Tests
${data.tests}

## Questions
For any questions, please contact me: 

<br>

[My Github](https://github.com/${data.github}?tab=repositories)

<br>

[Email Me](mailto:${data.email})
`;

  // Return the markdown content as a string
  return markdownContent;
}


// renderLicenseBadge;
module.exports = generateMarkdown
