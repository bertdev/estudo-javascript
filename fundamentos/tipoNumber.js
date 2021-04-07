//Formas de declarar um valor number
const peso1 = 1.0;
const peso2 = Number('2.5');

console.log(peso1, peso2);

//verificar se um desse numeros é inteiro
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 7.453;
const avaliacao2 = 8.43;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media);

//reduzir as casas decimais de um Number
console.log(media.toFixed(2));

//retornar o valor do number em string
//obs: se receber 2 como parametro retorna o number em binario
console.log(media.toString());
console.log(typeof media);
console.log(typeof Number);
