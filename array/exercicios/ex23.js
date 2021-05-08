// Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
// consoantes, ou seja, sem as vogais.

const retiraVogais = string => {
  const vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  vogais.forEach(vogal => string = string.replace(vogal, ""));
  return string;
}
console.log(retiraVogais("Fundamentos"));
