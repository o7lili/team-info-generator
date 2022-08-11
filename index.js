const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template.js');
const team = [];
const fs = require('fs');

const promptManager = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the Team Manager's name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter the name of the Team Manager!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the Team Manager's employee ID?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter the employee ID of the Team Manager!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the Team Manager's email address?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter the email address of the Team Manager!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "What is the Team Manager's Office number?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter the Office number of the Team Manager!');
                        return false;
                    }
                }
            }
            ])
            .then(managerData => {
                const manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber);
                team.push(manager);
                return promptMenu();
            })
};

const promptMenu = () => {
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'menu',
                message: 'Please select a type of employee to add:',
                choices: ['add an engineer', 'add an intern', 'finish team'],
            }
        ])
        .then(choice => {
            switch (choice.menu) {
                case 'add an engineer':
                    promptEngineer();
                    break;
                case 'add an intern':
                    promptIntern();
                    break;
                default:
                    finishTeam();
            }
        })
};

const promptEngineer = () => {
    console.log(`
    ================
    Add an Engineer
    ================
    `)

    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the Engineer's name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter the name of the Engineer!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the Engineer's employee ID?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter the employee ID of the Engineer!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the Engineer's email address?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter the email address of the Engineer!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: "What is the Engineer's github username?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the engineer's github username!");
                        return false;
                    }
                }
            }
        ])
        .then(engineerData => {
            const engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);
            team.push(engineer);
            return promptMenu();
        });
};

const promptIntern = () => {
    console.log(`
    ==============
    Add an Intern
    ==============
    `)

    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the intern's name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter the name of the intern!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the intern's employee ID?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the intern's employee ID!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the intern's email?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the intern's email!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: "What is the intern's school?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the intern's school!");
                        return false;
                    }
                }
            }
        ])
        .then(internData => {
            const intern = new Intern(internData.name, internData.id, internData.email, internData.school);
            team.push(intern);
            return promptMenu();
        })
};

const finishTeam = () => {
    console.log(`
    ==============
    Finished Team
    ==============

    Go checkout TeamProfiles.html for the completed Team Profile!
    `)
    
    fs.writeFile('./dist/TeamProfiles.html', generatePage(team), err => {
        if (err) throw err;
        });
    
}

promptManager()
    .catch(err => {
        console.log(err);
    });
