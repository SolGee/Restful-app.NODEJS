const suma = require('./module/sumar');
const multiplicar = require('./module/multiplicar');

console.log("suma1 =",suma.metodoSumar());

console.log("suma2 =",suma.otroMetodoParaExportarSuma(3,5));


console.log("multiplicar1 =", multiplicar.metodoMultiplicar());

console.log("multiplicar2 =",multiplicar.otraFuncionParaMultiplicar(6,8));