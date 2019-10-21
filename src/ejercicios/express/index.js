const express = require('express')
const app = express();
// Se crea una variable de ambiente que cambiara el servidor de acuerdo al que se le asigne. De lo contrario usara el servidor 3030
const port = process.env.PORT || 3030;

app.use(express.json());

const doggos = [
  {
    id: 0,
    size : "small",
    breed: "pug"
  },
  {
    id: 1,
    size : "small",
    breed: "chihuahua"
  },
  {
    id: 2,
    size : "small",
    breed: "pomerian"
  },
  {
    id: 3,
    size : "medium",
    breed: "dalmata"
  },
  {
    id: 4,
    size : "medium",
    breed: "border-collie"
  },
  {
    id: 5,
    size : "medium",
    breed: "chow-chow"
  },
  {
    id: 6,
    size : "big",
    breed: "pastor-aleman"
  },
  {
    id: 7,
    size : "big",
    breed: "gran-danes"
  },
  {
    id: 8,
    size : "big",
    breed: "san-bernardo"
  },
];

// 2 parametros (path, callback)
 
app.get('/', (req, res) => {
  res.send('Hello World | hehe | nodemon')
});

app.get('/api/dogs/list', (req, res) => {
    res.send(['Pastor Aleman', 'Yorkshire', 'Chihuahua', 'Rottweiler']);
});

app.get('/api/dogs/id/:id', (req, res) => {
  res.send(req.params.id);
});

app.get('/api/dogs/:size/:breed', (req, res) => {
  res.send(req.params.size);
});

app.get('/api/doggos/', (req, res) => {
  res.send(doggos);
})

app.get('/api/doggos/:breed', (req,res) => {
  const dog = doggos.find((dog) => {
    return dog.breed === req.params.breed;
  });
  
  if(!dog){
    res.status(404).send('No encontramos ningún perro de esa raza');
  }else{
    res.send(dog);
  }
})

app.post('/api/doggos/', (req, res) =>{
  const dogId = doggos.length;
  const dogge =  {
    id: dogId,
    size: req.body.size,
    breed: req.body.breed
  }
  doggos.push(dogge);
  res.status(201).send(dogge);
})

app.post('/api/doggos2/', (req, res) => {
  if(!req.body.breed || req.body.breed.length < 3){
    res.status(400).send('Introduce la raza correcta')
    return
  }
    const dogId = doggos.length;
    const dogge =  {
      id: dogId,
      size: req.body.size,
      breed: req.body.breed  
} 
  doggos.push(dogge);
  res.status(201).send(dogge);
})

app.listen(port, console.log(`Escuchando en servidor ${port}`));