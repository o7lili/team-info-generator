// create team cards
const generateCards = employeeCards => {
  if (!employeeCards) {
    return '';
  }

  return `
    <div class="card">${employeeCards}</div>
  `;
};



// export function to generate entire page
module.exports = templateData => {
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