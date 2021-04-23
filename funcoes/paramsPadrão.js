//formas de declarar parametros padrões para funções 
//primeira forma
function soma1(a, b, c) {
  a = a || 1;
  b = b || 4;
  c = c || 5;
  return a + b + c;
};

console.log(soma1());
console.log(soma1(3));
console.log(soma1(1,2,3));
console.log(soma1(0,0,0));//zero sera considerado como falso, fazendo os valores padrões serem usados

//outras formas 
function soma2(a,b,c) {
  a = a !== undefined ? a : 1; //se o parametro for undefined significa que não foi declarado
  b = 1 in arguments ? b : 4; //verificando com o idice se esse parametro está presente no array arguments; 
  c = isNaN(c) ? 5 : c; //verficando de se o parametro é um number ou não
  return a + b + c;
};

console.log(soma2());
console.log(soma2(3));
console.log(soma2(1,2,3));
console.log(soma2(0,0,0));

//forma pós ecmascript 2015
function soma3(a = 1, b = 4, c = 5) {
  return a + b + c;
};

console.log(soma3());
console.log(soma3(3));
console.log(soma3(1,2,3));
console.log(soma3(0,0,0));