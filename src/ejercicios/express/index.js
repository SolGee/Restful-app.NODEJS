const express = require('express')
const app = express();
const port = process.env.PORT || 3030;

// 2 parametros (path, callback)
 
app.get('/', (req, res) => {
  res.send('Hello World | hehe | nodemon')
});

app.get('/dogs', (req, res) => {
    res.send(['Pastor Aleman', 'Yorkshire', 'Chihuahua', 'Rottweiler']);
});

app.listen(port, console.log('Escuchando en servidor'));