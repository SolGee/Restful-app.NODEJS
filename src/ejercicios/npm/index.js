const start = new Date(2021, 00, 01);
const end = new Date(2021, 00, 18);

//Los meses empiezan a contarse desde 0. Enero es el mes 00.

const milSeconds = 24*60*60*1000;

const resultados = (end-start)/milSeconds;

console.log(resultados);
