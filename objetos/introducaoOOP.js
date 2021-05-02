//Código não executavel 
//só entendendo um pouco do paradigma OO

//procedura(baseado em procedimentos)

processamento(valor1, valor2, valor3);
//passando dados para um procedimento quee manipulará os valores 

//em procedural geralmete se tem uma função que recebe dados para 
//manipular, já em OO geralmente tem dados que possuem suas funções próprias

//OO
objeto = {
  valor1,
  valor2,
  valor3,
  processamento() {
		//função
	}
};
//passamos a invocar esses procedimentos a partir do dado
objeto.processamento();

//a ideia da orientação a objetos era abstrair o código para algo mais proximo do mundo real 
//entendendo que o mundo é formado por objetos que possuem atributos e comportametnos
//e que esses objetos se relacionam uns com os outros 
//
//Principios importantes: 
//1. abstração: observar um determinado objeto e ser capaz de traduzir/trazer para o código
//as caracteristicas e propriedades desse objeto que sejam uteis para os eu sistema 
//
//2. encapsulamento: ter os detalhes de implementação do objeto escondidos, deixar somente os 
//atributos e propriedades que sejam necessarios para a interação a mostra deixando publico só interfaces de manipulação
//
//3. herança(prototype): significa que um objeto filho, recebe atributos e comportamentos de um objeto pai 
//é uma relação do tipo "...é um...", um cachorro é um mamifero, logo possui caracteristicas comuns aos mamiferos
//um objeto mais especifico(cachorro) possui caracteristicas de um objeto mais geral(mamifero)
//
//obs: priorize composição ao inves de herança, composição é montar um objeto mais complexo
//juntando objetos mais simples a parte, uma relação do tipo "...tem um...", um carro tem um motor
//o objeto complexo(carro) possui um objeto menor(motor) que possui sua complexidade desaclopado de carro
//
//4. polimorfismo: o fato de um objeto possuir multiplas formas, utilizando a abstração de um objeto generico/geral
//e especializar gerando um objeto mais especifico carro => ferrari, carro => uno de firma 
//
//
