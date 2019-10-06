const EventEmitter = require('events');

const emitter = new EventEmitter();


// .on() recibe 2 parametros: ('nombre del evento', callback)
emitter.on('evento', () => {
    console.log('Un evento ocurrio');
});

// .emit() recibe 2 parametro: ('exactamente el mismo nombre del evento que le diste en .on()', argumentos del callback)
emitter.emit('evento')


emitter.on('eventoConArgumentos', (arg) => {
    console.log(`Un evento con los siguientes argumentos ha ocurrido: ${arg.id} | ${arg.number}`)
});

emitter.emit('eventoConArgumentos', {id: 1, number: 69});