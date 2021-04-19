//estrutura for para percorrer estruturas como array(não é a melhor) e objeto(é até interessante)
const notas = [10, 4.6, 9, 7.6, 9];

//for in vai retornar os indices do array ou os nomes das propriedades do objeto
for(let i in notas) {
  console.log(`${i} = ${notas[i]}`);
};

const pessoa = {
  nome: "herbert",
  idade: 19,
  altura: 170,
  peso: 40
};

for(let atributo in pessoa) {
  console.log(`${atributo} = ${pessoa[atributo]}`);
};