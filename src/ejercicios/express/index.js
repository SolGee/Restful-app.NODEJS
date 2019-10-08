const express = require('express')
const app = express()

// 2 parametros (path, callback)
 
app.get('/', (req, res) => {
  res.send('Hello World | hehe')
});

app.get('/dogs', (req, res) => {
    res.send(['Pastor Aleman, Yorkshire, Chihuahua, Rottweiler']);
});

app.listen(3030, console.log('Escuchando en servidor 3030'));