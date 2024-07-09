const calculadora = require('../src/calculadora')


it('soma de 30 + 10 deve ser 40', () => {
    expect(calculadora.soma(30, 10)).toBe(40)
});

it('Subtração de 30 - 10 deve ser 20', () => {
    expect(calculadora.sub(30, 10)).toBe(20)
});

it('Subtração de 6 - 3 deve ser 3', () => {
    expect(calculadora.sub(6, 3)).toBe(3)
});


it('multiplicação de 6 * 6 deve ser 36', () => {
    expect(calculadora.mult(6, 6)).toBe(36)
});

it('Divisão de 100 / 10 deve ser 10', () => {
    expect(calculadora.divisao(100, 10)).toBe(10)
});

