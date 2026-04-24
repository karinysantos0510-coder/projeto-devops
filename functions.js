function selecionarPersonagem(nome) {
  const personagens = ["Mario", "Luigi", "Peach", "Bowser"];
  return personagens.includes(nome);
}

function calcularPontuacao(moedas) {
  return moedas * 10;
}

function verificarVitoria(pontos) {
  return pontos >= 100;
}

module.exports = {
  selecionarPersonagem,
  calcularPontuacao,
  verificarVitoria
};