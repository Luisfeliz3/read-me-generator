// generateReadme function populating the README.md
function generateReadme({...answers}) {
    return `
<h1 align="center">${answers.projectName}</h1>
  
## Description
${answers.projectDescription}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
 ${answers.installation}
## Usage
 ${answers.usage}
## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br/>
This application is covered by the ${answers.license} license. 
## Contributing
 ${answers.contributors}
## Tests
${answers.test}
## Questions
 ${answers.questions}<br />
<br />
 GitHub: [${answers.github}](https://github.com/${answers.github})<br />
<br />
 Email me with any questions: ${answers.email}<br /><br />

    `;
  }
  
  module.exports = generateReadme;