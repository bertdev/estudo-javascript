//tipos de declarações de funções

//function declaration
function soma(x, y) {
  return x + y;
};

//function expression
const subtracao = function (x, y) {
  return x - y;
};

//named function expression (muito pouco usada)
const multi = function multi(x, y) {
  return x * y;
};

//diferença entre elas:
//uma função declarada com function declaration pode ser chamada antes(acima) 
//da sua declaração no código