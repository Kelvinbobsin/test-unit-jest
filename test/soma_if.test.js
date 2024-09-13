const soma = require ('../src/soma_if')

test('Soma de 2 + 2 deve ser 4', () => {
    expect(soma(2, 2)).toBe(4);
});

it('Não deve somar strings', () => {
    expect(soma(100, '1')).toBe(null);
});