//operador ternario atua em 3 operandos 

//estrutura do operador ternario:
// operação que retorne true ou false(logica ou relacional) ? retorno caso true : retorno caso false;

const resultado = nota => nota >= 7 ? "Aprovado" : "Reprovado";

console.log(resultado(7.8));
console.log(resultado(3));
