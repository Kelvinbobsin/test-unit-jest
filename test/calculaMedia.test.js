const calculaMedia = require ('../src/calculaMedia')

describe('Calcula Média', () => {
    
    test('Deve retornar a média correta das 3 notas', () => {
        expect(calculaMedia(5,5,5)).toBe(5);
    });
    

    test('Deve retornar 0 se todas as notas forem zero', () => {
        expect(calculaMedia(0,0,0)).toBe(0);
    });
});

