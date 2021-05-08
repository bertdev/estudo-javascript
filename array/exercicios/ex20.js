// Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela

const contaPalavras = string => {
  const palavras = string.split(" ");//separa uma string com base no separador que passar de parametro
  return palavras.length;
};

console.log(contaPalavras("Meu nome é herbert"));
