/* Function that returns a license badge based on which license
is passed in. If there is no license, returns an empty string */ 
function renderLicenseBadge(license) {}

/* Function that returns the license link.
If there is no license, returns an empty string */ 
function renderLicenseLink(license) {}

/* Function that returns the license section of README.
If there is no license, returns an empty string */
function renderLicenseSection(license) {}

// Function that generates markdown for README.
function genrateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
