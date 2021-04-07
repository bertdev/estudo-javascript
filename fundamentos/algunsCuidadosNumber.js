//Irá retornar o valor infinity
console.log(7 / 0);

//Irá converter a string para um number e realizar a operação
console.log("10" / 2);

//Retorna NaN que significa Not a number
console.log("Show!" * 2);

//Não retornará 0.8 pela especificação (IEEE) do tipo de operação de ponto flutuante que o js suporta
console.log(0.7 + 0.1);

//Isso não é uma opreação válida
//console.log(10.toString());
//Mas é uma opreação válida
console.log((10.345).toFixed(2));
