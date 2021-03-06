// The Employee Summary Application
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
//const { mainModule } = require("process");
const Employee = require("./lib/Employee");

const employeeArray = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

//defining the structure of the Employee Summary CLI Menu
function employeeMenu() {

    // Defining the Manager related Menu Prompts and pushing the information to the Employee Array
    function addManagerInfo(){
        console.log("Hi, Welcome to the Employee Summary App! \n");
        console.log("Please enter information of your Team:");
        inquirer.prompt([
                {
                    type: "input",
                    name: "managerName",
                    message: "Enter Manager's name:"
                },
                {
                    type: "input",
                    name: "managerId",
                    message: "Enter Manager's id:"
                },
                {
                    type: "input",
                    name: "managerEmail",
                    message: "Please enter Manager's email id:"
                },
                {
                    type: "input",
                    name: "managerOfficeNum",
                    message: "Enter Manager's office number:"
                }
            ]).then(answers => {
                employeeArray.push(new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNum));
                //console.log("Employee Array:" +  JSON.stringify(employeeArray,null,""));
                addTeamInfo();
            });
    }

    // Defining the Manager's Team related Menu Prompts and pushing the information to the Employee Array with respective information
    function addTeamInfo(){
        inquirer.prompt([
            {
                type: "list",
                name: "employeeRole",
                message: "\n\nPlease enter your Employee's Information: \n What is the Employee's role?",
                choices: ["Engineer", "Intern", "No More employees to Add"]
            }
        ]).then(answers => {
                if (answers.employeeRole == "Engineer"){
                    addEngineerInfo();
                } else if (answers.employeeRole == "Intern"){
                    addInternInfo();
                } else if (answers.employeeRole == "No More employees to Add"){
                    renderTeamInfo();
                }
        })
    }

    //function definition of CLI Prompts related to the Engineer Employee role
    function addEngineerInfo() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "Plese enter Engineer's name:"
            },
            {
                type: "input",
                name: "engineerId",
                message: "Please enter Engineer's ID:"
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "Please enter engineer's Email ID:"
            },
            {
                type: "input",
                name: "gitID",
                message: "Enter engineer's github ID:"
            }
        ]).then(answerEng => {
            employeeArray.push(new Engineer(answerEng.engineerName, answerEng.engineerId, answerEng.engineerEmail, answerEng.gitID));
            //console.log("Engineer Info:" +  JSON.stringify(employeeArray,null,""));
            addTeamInfo();
        })
    }

    //function definition of CLI Prompts related to the Intern Employee role
    function addInternInfo() {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "Plese enter Intern's name:"
            },
            {
                type: "input",
                name: "internId",
                message: "Please enter Intern's ID:"
            },
            {
                type: "input",
                name: "internEmail",
                message: "Please enter Intern's Email ID:"
            },
            {
                type: "input",
                name: "school",
                message: "Enter Intern's school name:"
            }
        ]).then(answerIntern => {
            employeeArray.push(new Intern(answerIntern.internName, answerIntern.internId, answerIntern.internEmail, answerIntern.school));
            //console.log("Intern Info:" +  JSON.stringify(employeeArray,null,""));
            addTeamInfo();
        })
    }

    //function definition of rendering the Team Info after gathering all information about the Manager and his Engineering and Intern team
    function renderTeamInfo(){
        console.log("Employee Summary Page is getting Rendered!!!!");
        if (!fs.existsSync(OUTPUT_DIR)){
            fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, render(employeeArray), "utf-8");
    }
    
    //Invoke the function that will display the Manager Prompts, which has logic to invoke the other role's prompts based on the User choices
    addManagerInfo();
};

//Function call that Kick Starts the Application
employeeMenu();