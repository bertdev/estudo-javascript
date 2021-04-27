//elaborar duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo aplicado
//a primeira retornará o montante da aplicação com juros simples
//a segunda retornará o montante com juros composto 

const montanteJurosSimples = (capIni, txJuros, tempo) => capIni * txJuros * tempo;

const montanteJurosComposto = (capIni, txJuros, tempo) => {
  let montante = capIni * ((1 + txJuros) ** tempo);
  return montante;
};

console.log(`Juros simples: ${montanteJurosSimples(200, 0.3, 10).toFixed(2)}`);
console.log(`Juros composto: ${montanteJurosComposto(200, 0.3, 10).toFixed(2)}`);
