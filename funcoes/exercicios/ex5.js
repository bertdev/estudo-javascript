//essa é uma pratica usando uma caracteristica problematica do tipo number
//quando trabalhamos com numeros com casas decimais podemos ter resultados 
//inesperados
//criar uma função que recebe 0.30000000000000004 e retorna R$ 0,30

const formataDecimais = decimal => {
  const formatado = decimal.toFixed(2).toString().replace(".",",");
  return `R$${formatado}`;
};

console.log(formataDecimais(0.1 + 0.2));
console.log(formataDecimais(0.3000000000000000000004));
