const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template.js');
// const { writeFile, copyFile } = require('./utils/generate-site');
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
                console.log('line 74', managerData);
                const manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber);
                console.log('line 76', manager);
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

    // if there's no 'engineers' array property, create one
    // if (!.engineers) {
    //     .engineers = [];
    // }
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
            console.log('line 173', engineerData);
            const engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);
            console.log('line 175', engineer);
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

    // if no 'interns' array property, create one
    // if (!.interns) {
    //     .interns = [];
    // }
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
            console.log('line 248', internData);
            const intern = new Intern(internData.name, internData.id, internData.email, internData.school);
            console.log('line 250', intern);
            team.push(intern);
            return promptMenu();
        })
};

const finishTeam = () => {
    console.log(`
    ==============
    Finished Team
    ==============
    `)
    console.log('team, line 257', team);
    
    fs.writeFile('./TeamProfiles.html', generatePage(team), err => {
        if (err) throw err;
    
    //     console.log('Team Portfolio complete! Check out TeamProfiles.html to see the output!');
    });
    
}

promptManager()
    // .then(promptMenu)
    // .then( => {
    //     return generatePage();
    // })
    // .then(pageHTML => {
    //     return writeFile(pageHTML);
    // })
    // .then(writeFileResponse => {
    //     console.log(writeFileResponse);
    //     return copyFile();
    // })
    // .then(copyFileResponse => {
    //     console.log(copyFileResponse);
    // })
    .catch(err => {
        console.log(err);
    });
