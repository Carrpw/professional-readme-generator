// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  [![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-yellow.svg)](https://opensource.org/licenses/${data.license})


  ## Description

  ${data.description}

  ## Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ### Installation

  ${data.installation}

  ### Usage

  ${data.usage}

  ### License

  [![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-yellow.svg)](https://opensource.org/licenses/${data.license})

  ### Contributors

  ${data.contributors}

  ### Tests

  ${data.tests}

  ### Questions

  *${data.profile}
  *${data.name}
  *${data.email}
  *${data.repository}

`;
}

module.exports = generateMarkdown;
