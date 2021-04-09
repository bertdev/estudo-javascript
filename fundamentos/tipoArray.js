const valores = [8.4, 5.3, 9.3, 3.5];
console.log(valores[0], valores[3]);

//se tentar acessar um valor que não existe retorna undefined
console.log(valores[4]);

valores[4] = 10;
console.log(valores);

//acessar a quantidade de valores de um array
console.log(valores.length);

//adicionar valores ao array com metodo push
valores.push(null, "sprite", true, {id: 2});
console.log(valores);

//remover o ultimo valor do array usando metodo pop
valores.pop();
console.log(valores);

//apagando um valor do array usando delete, a sua posição ainda existirá porem vazia
delete valores[0];
console.log(valores);

//obs: uma boa prática é manter um array só com valores do mesmo tipo
