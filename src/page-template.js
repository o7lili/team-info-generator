// create team cards for manager, engineers, and interns
const generateTeam = (team) => {
  const generateManager = manager => {
    if (!manager) {
      return 'err';
    }
  
    return `
      <div class="card shadow">
          <div class="card-header bg-warning">
            <h3 class="card-title text-dark">${manager.getName()}</h3>
            <h5 class="card-title text-muted"><i class="bi bi-briefcase-fill"></i> ${manager.getRole()}</h5>
          </div>
          <div class="p-4">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${manager.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}" class="text-decoration-none">${manager.getEmail()}</a></li>
              <li class="list-group-item">Office number: ${manager.officeNumber}</li>
            </ul>
          </div>
      </div>
    `
  }
  const generateEngineer = engineer => {
    if (!engineer) {
      return 'err';
    }

    return `
      <div class="card shadow">
          <div class="card-header bg-warning">
            <h3 class="card-title text-dark">${engineer.getName()}</h3>
            <h5 class="card-title text-muted"><i class="bi bi-pc-display-horizontal"></i> ${engineer.getRole()}</h5>
          </div>
          <div class="p-4">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${engineer.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}" class="text-decoration-none">${engineer.getEmail()}</a></li>
              <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" class="text-decoration-none">${engineer.getGithub()}</a></li>
            </ul>
          </div>
      </div>
    `
  }
  const generateIntern = intern => {
    if (!intern) {
      return 'err';
    }

    return `
      <div class="card shadow">
          <div class="card-header bg-warning">
            <h3 class="card-title text-dark">${intern.getName()}</h3>
            <h5 class="card-title text-muted"><i class="bi bi-mortarboard-fill"></i> ${intern.getRole()}</h5>
          </div>
          <div class="p-4">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${intern.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}" class="text-decoration-none">${intern.getEmail()}</a></li>
              <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
          </div>
      </div>
    `
  }
  const cards = [];

  team.forEach(element => {
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

  return cards.join("");
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
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
    </head>
    <body>
        <header>
            <div>
                <h1 class="text-center text-warning bg-dark m-1 py-5">My Team</h1>
            </div>
        </header>
        <main>
          <div class="card-deck m-5 p-5 d-inline-flex justify-content-center">${generateTeam(team)}</div>
        </main>
        <footer class="container text-center py-3">
            <h7 class="text-muted">&copy; ${new Date().getFullYear()} by o7lili</h7>
        </footer>
    </body>
    </html>  
    `;
};