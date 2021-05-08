// Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de
// vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar
// maiúsculas de minúsculas.

const contaCaractere = (caractere, string) => {
  const frase = [...string].filter(cracterAtual => caractere == cracterAtual);
  return frase.length;
};

console.log(contaCaractere("r", "A sorte favorece os audazes"));
