const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(`<h1>Hola a todos</h1> </br>`);
    res.write(`<p> Mi sitio web </p>`);
    res.end();
}).listen(5050);


/*const server = http.createServer((req, res,) => {
    if (req.url === '/'){
        res.write('Hola desde nodejs | ');
        res.write('Estoy entendiendo');
        res.end();
    }

    if (req.url === '/holi'){
        res.write('Holi coche1');
        res.end();
    }
});

server.listen(3030);
// .listen() desde que puerto se ejercutara en el sevidor
console.log('Escuchando en 3030...');
/*const server = http.createServer();

server.on('conection', (socket) => {
    console.log('nueva conexión detectada');
});

server.listen(2012);
console.log('Escuchando en el puerto 2012...');
*/