//estrutura de repetição com apropriada quando você tem uma quantidade indeterminada de repetiçoes
//while possui a verificação condicional no inicio, isso indica que ele só será executado se a condição
//passada como parametro for atendida(retornar true), podendo executar 0 ou mais vezes
//enquanto a condição for atendida ele será executado

function getInteiroAleatorio (min, max) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
};

let opcao = 0;

while (opcao != -1) {
  opcao = getInteiroAleatorio(-1, 10);
  console.log(`A opção escolhida foi ${opcao}`);
};

console.log(`Até a proxima...`);