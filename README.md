







# Employee Summary Generator
## Table of contents

1. [Description](#description)

2. [Install Guide](#install)

3. [Usage](#usage)

4. [Contribute](#contribute)

5. [license](#license)

6. [Tests](#tests)

7. [Questions](#questions)
        
<div id="description"/>
        
## Description
```
Application that will help build a software engineering team generator using the Node JS Command Line Interface. The Application will prompt the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns. The application will create a HTML file that displays a nicely formatted team roster based on the information provided by the user.
```
        
<div id="install"/>
        
## Installation Instruction
```
Node JS for running the Application as a CLI, Inquirer npm module to generate the CLI prompts to get user inputs, Bootstrap CDN for Styling the HTML page, font Awesome for the icons, Materialize CDN for the card-panel header colors.
```
        
<div id="usage"/>
        
## Usage
```
Anyone interested in downloading the Application will need Node JS and npm inquirer installed. 'app.js' is the main program that kicks off the app, by running command 'node app'. Then, the app will start presenting the user with various prompts, that the user have to answer. It starts off with asking about the Manager information, followed by other employees (Engineer or Intern). User can keep selecting the employee role types and keep entering their details. Manager will require Office-Number information, while Engineer will require Github account info, and Intern will require thier School information. When all the employee info is entered by the user, they can opt 'no more employee to add'. When that choice is made, all the employee information provided by the user which was saved in an Array will be pulled into the respective HTML templates to create the final HTML page in the 'output' folder. The user can view the newly rendered HTML page in the browser to display all his/her employee details with color coding, respective to the employee role.
```
        
<div id="contribute"/>
        
## How to Contribute
```
N/A
```
        
<div id="license"/>
        
## License
```
No License
```
        
<div id="tests"/>
        
## Tests
```
JEST npm module is required to run the test suites. JEST can be installed by running 'npm i jest'. The test suites are located in the 'test' folder to test the Employee, Manager, Engineer and Intern class definition.
```
        
<div id="questions"/>
        
## Questions

Application Demo Video: [[https://youtu.be/CB9S7ksgbw4]](https://youtu.be/CB9S7ksgbw4)

GitHub Repository: [[https://github.com/meenaambalam/Employee_Summary]](https://github.com/meenaambalam/Employee_Summary)

Please contact me at [meena.a.ambalam@gmail.com](mailto:meena.a.ambalam@gmail.com?subject=Github) in case of any questions with the application or instruction.