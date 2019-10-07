//Los meses empiezan a contarse desde 0. Enero es el mes 00.

const start = new Date(2021, 00, 01);
const end = new Date(2021, 00, 18);

const newStart = new Date(2021, 02, 01);
const newEnd = new Date(2021, 03, 01);


const milSeconds = 24*60*60*1000;

const results = (end-start)/milSeconds;

const newResults = (newEnd - newStart)/milSeconds;

console.log(results);
console.log(newResults);

