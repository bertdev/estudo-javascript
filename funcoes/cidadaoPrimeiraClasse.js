//Função em JS é First-class object (citizen)
//Higher-order function
//isso significa que podemos tratar função como se fosse um dado e isso abre um leque de possibilidades
//exemplos: armazenar função em variavel, passar ela como parametro para outra função
//retornar uma função como resultado de outra função, etc.

//criar função de forma literal(pode receber parametros e retornar algo, 
//por padrão retorna undefined se não tiver retutn definido; o bloco de código não pode ser omitido)
function fun1(texto) {
  console.log(texto);
};

//armazenar em variavel(essa função é uma função anonima)
//pode se chamada a partir do nome da variavel 
const fun2 = function() {
  console.log("qualquer coisa");
};

//armazenar em um array 
//para ser chamada usamos: array[indice](parametros);
const array = [function(){console.log("opa");}, fun1, fun2];

//armazenar em um objeto
//para ser chamada usamos: obj.nomeAtributo(parametros);
const obj = {
  falar: function() {
    console.log("opa");
  }, 
};

//passar função como paramtero para outra função
function run(fun) {
  fun();
};

run(function(){console.log("executando...");})

//retornar uma função a partir de outra função/ uma função poder ser declarada dentro de outra 
function soma(a,b) {
  return function(c) {
    console.log(a + b + c);
  };
};

soma(1,3)(6);
const adicionarMais = soma(1,3);
adicionarMais(6);