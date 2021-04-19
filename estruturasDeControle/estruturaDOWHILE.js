//estrutura de repetição para um numero indeterminado de repetições mas que deve ocorrer pelomenos uma vez
//a estrutura do while possui a verificação condicional no final, isso faz com que 
//aconteca pelo menos uma repetição, as repetições continuarão enquanto a condição continuar sendo atendida

function imprimirInteiroAleatorio(min, max) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
};

let opcao = 0;

do {
  opcao = imprimirInteiroAleatorio(-1, 10);
  console.log(`A opção escolhida foi ${opcao}`);
} while (opcao != -1 );

console.log("Até a proxima...");