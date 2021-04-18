//operador destructor trabalhando em arrays [] nos permite acessar 
//os dados contidos dentro do array que vai ser desestruturado

const [a] = [10];
console.log(a);

//o destructuring em array nos permite pular valores que queremos ignorar
//também permite definir valores padrões caso a desestruturação retorne valor undefined
const [n1, , n3, , n5, , n7 = 7] = [1, 2, 3, 4];
console.log(n1, n3, n5, n7);

//desestructuring de array dentro de outro array
const [ , [nota1, , nota2] ] = [[10, 5], [3, 6, 8]];
console.log(nota1, nota2);