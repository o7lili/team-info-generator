const inquirer = require('inquirer');
// const fs = require('fs');
// const generateTeam = require('./src/page-template');

// const pageHTML = generateTeam();

// fs.writeFile('./TeamProfiles.html', pageHTML, err => {
//     if (err) throw err;

//     console.log('Team Portfolio complete! Check out TeamProfiles.html to see the output!');
// });


const promptUser = () => {
    return inquirer.prompt([
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
    ]);
};

const promptEngineer = portfolioData => {
    console.log(`
    ================
    Add an Engineer
    ================
    `)

    // if there's no 'team' array property, create one
    if (!portfolioData.team) {
        portfolioData.team = [];
    }
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
        ]);
}

promptUser().then(answers => console.log(answers));
