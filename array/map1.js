//map é uma forma de percorrer e transformar um array, ele mapeia o array, retorna um outro array de mesmo tamanho
//com os elementos transformados 

const nums = [1, 2, 3, 4, 5];

//map é um for com propósito
//o map recebe um callback, e passa para essa callback três parametros: o elemento, o indice e o array
let resultado = nums.map(element => {
  return element * 2;
});

//obs: o map não modifica o array base, ele gera um novo array distinto do base
console.log(resultado);

const soma10 = element => element + 10;
const triplo = element => element * 3;
const paraDinherio = element => `R$ ${parseFloat(element).toFixed(2).replace(".",",")}`;

resultado = nums.map(soma10).map(triplo).map(paraDinherio);
console.log(resultado);

