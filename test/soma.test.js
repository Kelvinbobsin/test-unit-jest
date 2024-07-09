const soma = require ('../src/soma')

test('soma de 2 + 2 deve ser 4', () => {
    expect(soma(2,2)).toBe(4)
});

test('soma de -20 + 10 deve ser -10', () => {
    expect(soma(-20, +10)).toBe(-10)
});