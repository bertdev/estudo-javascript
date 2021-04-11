let valor;//não inicializada
//retornará undefined
console.log(valor);

//null significará que essa variavel não possui nenhum valor e não está apontando
//para nenhum endereço de memoria
valor = null;
console.log(valor);
//cuidados com o valor null
//console.log(valor.toString());//retornará erro

const produto = {};
console.log(produto.preco);//retornará undefined

//dica: sempre que quiser "Zerar" uma variavel que aponta para um endereço de memoria
//dê prioridade para o null no lugar de undefined, sempre evite usar undefined

let teste = {nome: "nome qualquer"};
let teste2 = teste;
teste = null;
console.log(teste2);
console.log(teste);
