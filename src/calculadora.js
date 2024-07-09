class Calculadora {
    soma(a, b) { return a + b };
    sub(a, b) { return a - b };
    mult(a, b) { return a * b };
    divisao(a, b) { return a / b };
}

const calculadora = new Calculadora;
module.exports = calculadora;