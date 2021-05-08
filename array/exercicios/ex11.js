// Quando temos um objeto e manipulamos seus atributos, adicionando, atualizando ou removendo-os, estamos
// apenas modificando-o, mas, em essência, o objeto continua o mesmo, ou seja a sua referência de memória é a
// mesma.
// Num projeto que você está trabalhando, você foi designado a refatorar diversas funções para que façam
// cópias de objetos e manipulem os dados dessas cópias, com o intuito de evitar efeitos indesejáveis em
// algumas situações devido a referências a objetos. Abaixo, está a descrição de uma dessas funções.
// Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o
// nome de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a
// propriedade especificada no segundo parâmetro.

const removerPropriedade = (objeto, propriedade) => {
  const objetoNovo = Object.assign({}, objeto);
  //const objetoNovo = {...objeto}; modo alternativo
  delete objetoNovo[propriedade];
  return objetoNovo;
};

console.log(removerPropriedade({a: 1, b: 2}, "b"));
const objectEx = {a: 1, b: 2};
//verificando se o objeto gerado é diferente do objeto passado como parametro
console.log(Object.is(removerPropriedade(objectEx, "b"), objectEx));
