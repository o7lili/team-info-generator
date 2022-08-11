# team-info-generator

## Description
Generates a team portfolio using node. Assuming the user is the manager, they can add in engineers and interns after being prompted for their own information. All employees will have prompts for their name, employee ID#, and email. Manager will also be prompted for their office number. Engineers will have an additional prompt for their github username. Interns will have an additional prompt for their school. When the user chooses "finish team", the HTML file will be generated to show a card deck of employees and their information entered.

## Installation
Ensure inquirer is installed after cloning the repo.

## Usage
- use "node index" to execute the app and start answering the prompts
- walkthrough video: https://drive.google.com/file/d/1fCjqKkMkZsha8q5MbzC1z0WHijrqW2sW/view 

## Tests
- Ensure jest is installed to run tests.
- To execute all tests, use "npm run tests"
- individual tests: Employee, Manager, Engineer, Intern. Use "npm run test (desired class to test)"
