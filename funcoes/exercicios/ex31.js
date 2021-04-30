//percorrer um vetor de inteiros, contar quantos numeros negativos existem nele e exibir no console

function contaNumerosNegativos(numeros) {
  let qtdNegativos = 0;
  numeros.forEach(element => {
    if(element < 0) {
      qtdNegativos++;
    };
  });
  console.log(`Existem ${qtdNegativos} números negativos nesse vetor`)
};

contaNumerosNegativos([10, -2, -3, 0, -5, 11, 3, 5]);