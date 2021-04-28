// verificar se um numero inteiro recebido como parametro é divisivel por 3
// se for retornar true, caso contrario retorna false

function verificaDiv(numero) {
  return numero % 3 == 0; //essa operação já retorna true ou false
};

//com arrow 

const divisivelPor3 = numero => numero % 3 == 0;

console.log(verificaDiv(3), verificaDiv(6), verificaDiv(5));
console.log(divisivelPor3(3), divisivelPor3(6), verificaDiv(5));
