const sumar = () => {
    return 2+2;
};

exports.metodoSumar = sumar;

exports.otroMetodoParaExportarSuma = function(numero1, numero2) {
    return numero1 + numero2;
};