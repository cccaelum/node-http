//SSR: Server Side Rendering

const http = require('node:http'); //con este protocolo enganchamos parte del cliente con la parte del servidor 
const data = require('./data.js');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' }); //no hace falta realmente, es buena practica ponerlo
  res.end(` 
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8">
        <title>${data.title}</title>
      </head>
      <body>
        <h1>${data.subtitle}</h1>
        <p>${data.description}</p>
        <p>${data.article[0]}</p>
        <img src=${data.meme} alt='node-meme'>
        <p>${data.article[1]}</p>
        <a href=${data.repo}>node-http</a>
      </body>
    </html>
  `);
})

server.listen(0, () => {
    console.log(
      `server listening on port http://localhost:${server.address().port}`
    );
  });

  