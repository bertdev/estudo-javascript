//em js o array é um objeto, não existe o tipo de dados array nativo em js, ele é um objeto especial 
//ele possui caracteristicas especiais para funcionar igual um array 

console.log(typeof Array, typeof new Array, typeof []);

//apesar de ser heterogeneo, é uma boa prática utilizarmos somente dados de um mesmo tipo em um array 

let aprovados = new Array("bia", "carlos", "ana");
console.log(aprovados);

aprovados = ["bia", "carlos", "ana"];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);//retorna undefined pois não existe

aprovados[3] = "paulo";
console.log(aprovados[3]);

//metodo mais aprorpiado de adicionar um elemento ao final do array
aprovados.push("bert");
console.log(aprovados.length);

aprovados[9] = "raphael";
console.log(aprovados.length);//os espaços vazios ficarão como undefined
console.log(aprovados[8] === undefined);
console.log(aprovados);

//algumas funções do array
aprovados.sort();//ordenação do array
console.log(aprovados);

delete aprovados[1];//irá excluir o elemento no indice 1 do array mas a posição ainda exestirá com undefined de valor
console.log(aprovados[1], aprovados[2]);
aprovados[1] = "bert";

//função que serve para adicionar elementos em um determinado indice, serve para remover o elemento
//serve para remover um elemento e adicionar outro ao mesmo tempo 
aprovados.splice(1,1);//a partir do indice 1, excluir 1 elemento
console.log(aprovados);

aprovados.splice(1,1,"elemento1");//a partir do indice 1, excluir 1 elemento e adicionar o valor passado
console.log(aprovados);

aprovados.splice(1,0,"elemento1.1");//a partir do indice 1 adicionar o valor passado
console.log(aprovados);

