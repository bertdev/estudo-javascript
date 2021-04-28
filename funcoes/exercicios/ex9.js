//uma função para tratar de um sistema de notas que tem as seguintes regras:
//todo aluno recebe nota de 0 a 100, abaixo de 40 é reprovado 
//regras de arredondamento: se a diferenca entre a nota e o proximo multiplo de 5 for 
//menor que 3, arredondar a nota para esse proximo multipo de 5
//se a nota for abaixo de 38, não é feito nenhum arredondamento

const calculaArredondamentoNota = nota => {
  if(nota < 38) {
    return nota;
  };
  
	if(nota%5 >=  3 && nota%5 > 0) {               
			nota = nota + (5 - nota % 5);//adiciona o que falta para chegar ao proximo multiplo de 5 
			return nota;
  };
  
  return nota;
};

console.log(calculaArredondamentoNota(29));
console.log(calculaArredondamentoNota(83));
console.log(calculaArredondamentoNota(84));
console.log(calculaArredondamentoNota(85));
console.log(calculaArredondamentoNota(88));
