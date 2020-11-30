// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Description](#description)
  * [Table of Contents](#table of contents)
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

  ${data.license}

  ### Contributors

  ${data.contributors}

  ### Tests

  ${data.tests}

  ### Questions

  ${data.githubInfo.profile}
  ${data.githubInfo.name}
  ${data.githubInfo.email}
  ${data.repository}
  
`;
}

module.exports = generateMarkdown;
