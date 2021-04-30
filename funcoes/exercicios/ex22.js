//criar uma função que calcula o valor da anuidade de uma associação
//recebe como parametro um inteiro representando o mês(1 ao 12) que foi paga a anuidade
//a anuidade deve ser paga em janeiro por mês é cobrado 5% de juros(composto)
//deve retornar o valor a ser pago com base no mes passado como parametro 

function calculaAnuidade(mes) {
  //tomarei 1000 como valor base da anuidade se paga no mês certo
  const valorBaseAnuidade = 1000;
  let valorComJuros = 0;
  if(mes == 1) {
    return valorBaseAnuidade;
  } else {
    valorComJuros = valorBaseAnuidade * ((1 + 0.05) ** (mes - 1));
    return valorComJuros;
  };
};

console.log(calculaAnuidade(2));
console.log(calculaAnuidade(1));
