function generateMarkdown(data) {
    return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)${renderLicenseLink(data.license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, please contact me at [${data.email}](mailto:${data.email}). You can also find more of my work at [${data.github}](https://github.com/${data.github}).
`;
}

module.exports = generateMarkdown;

function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateMarkdown(answers);
        writeToFile('README.md', readmeContent);
    });
}

// Function call to initialize app
init();

function renderLicenseBadge(license) {
    if (license === 'None') {
        return '';
    }
    return `![License: ${license}](https://img.shields.io/badge/License-${license.replace(' ', '_')}-blue.svg)`;
}

function renderLicenseLink(license) {
    if (license === 'None') {
        return '';
    }
    return `\n- [License](#license)\n`;
}

function renderLicenseSection(license) {
    if (license === 'None') {
        return '';
    }
    return `## License\nThis project is licensed under the ${license} license.`;
}

