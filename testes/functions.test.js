const {
  selecionarPersonagem,
  calcularPontuacao,
  verificarVitoria
} = require('../functions');

test('personagem válido', () => {
  expect(selecionarPersonagem('Mario')).toBe(true);
});

test('personagem inválido', () => {
  expect(selecionarPersonagem('Yoshi')).toBe(false);
});

test('pontuação correta', () => {
  expect(calcularPontuacao(5)).toBe(50);
});

test('vitória quando >= 100 pontos', () => {
  expect(verificarVitoria(120)).toBe(true);
});

test('derrota quando < 100 pontos', () => {
  expect(verificarVitoria(80)).toBe(false);
});