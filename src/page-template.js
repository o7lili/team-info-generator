// create team cards
const generateTeam = (team) => {
  const generateManager = manager => {
    if (!manager) {
      return 'err';
    }
  
    return `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <div class="card-header">
            <h1 class="card-title">${manager.getName()}</h2>
            <h2 class="card-title">${manager.getRole()}</h2>
          </div>
          <ul>
            <li class="card-text">${manager.getId()}</li>
            <li class="card-text">${manager.getEmail()}</li>
            <li class="card-text">${manager.officeNumber}</li>
          </ul>
        </div>
      </div>
        `;
  };

  const generateEngineer = engineer => {
    if (!engineer) {
      return 'err';
    }

    return `
    <div class="card">
    <div class="card-title">
      <h2>${engineer.getName()}</h2>
      <h2>${engineer.getRole()}</h2>
    </div>
    <div class="card-text">
      <ul>
        <li>${engineer.getId()}</li>
        <li>${engineer.getEmail()}</li>
        <li>${engineer.getGithub()}</li>
      </ul>
    </div>
    </div>
    `;
  }

  const generateIntern = intern => {
    if (!intern) {
      return 'err';
    }

    return `
    <div class="card">
    <div class="card-title">
      <h2>${intern.getName()}</h2>
      <h2>${intern.getRole()}</h2>
    </div>
    <div class="card-text">
      <ul>
        <li>${intern.getId()}</li>
        <li>${intern.getEmail()}</li>
        <li>${intern.getSchool()}</li>
      </ul>
    </div>
    </div>
    `;
  }

  const cards = [];

  team.forEach(element => {
    console.log(element.getRole());

    if (element.getRole() === 'Manager') {
      cards.push(generateManager(element));
    }
    if (element.getRole() === 'Engineer') {
      cards.push(generateEngineer(element));
    }
    if (element.getRole() === 'Intern') {
      cards.push(generateIntern(element));
    }
  });
  console.log('line 81', cards);

  return cards;
};





// export function to generate entire page
module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Portfolio</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    </head>
    <body>
        <header>
            <div class="container flex-row justify-space-between align-center py-3">
                <h1 class="page-title text-secondary bg-dark py-2 px-3">My Team</h1>
            </div>
        </header>
        <main>${generateTeam(team)}</main>
        <footer class="container text-center py-3">
            <h3 class="text-dark">&copy; ${new Date().getFullYear()} by o7lili</h3>
        </footer>
    </body>
    </html>  
    `;
};