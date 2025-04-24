const validaSenha = require('../src/validaSenha');

describe('validaSenha', () => {
    
  test('retorna false para senha com menos de 8 caracteres', () => {
    expect(validaSenha('Abc123')).toBe(false);
  });

  test('retorna false para senha sem letra maiúscula', () => {
    expect(validaSenha('senha1234')).toBe(false);
  });

  test('retorna false para senha sem número', () => {
    expect(validaSenha('SenhaSegura')).toBe(false);
  });

  test('retorna true para senha válida', () => {
    expect(validaSenha('Senha123')).toBe(true);
  });

});
