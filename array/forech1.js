//forEach é um metodo especifico de percorrer um array

const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"];

//o forEach recebe uma callback que será executada a cada elemento do array percorrido 
//passanso como parametro para ela o elemento o indice e o array nessa sequencia
aprovados.forEach((elemento, indice, array) => {
  console.log(`${indice + 1}: ${elemento}`);
  console.log(array);
});

aprovados.forEach(nome => console.log(nome));

const exibirAprovados = aprovado => console.log(aprovado);
aprovados.forEach(exibirAprovados);

