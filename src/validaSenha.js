function validaSenha(senha) {
    const temOitoCaracteres = senha.length >= 8;
    const temMaiuscula = /[A-Z]/.test(senha);
    const temNumero = /[0-9]/.test(senha);
  
    return temOitoCaracteres && temMaiuscula && temNumero;
  }
  
  module.exports = validaSenha;
  