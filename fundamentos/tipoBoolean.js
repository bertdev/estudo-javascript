//valores booleanos basicos são true e false
let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

//o valor 1 pode ser convertido para o valor booleano true
isAtivo = 1;
console.log(!!isAtivo);

//tipos que podem ser eventualmente convertidos para verdadeiros
console.log(`Valores verdadeiros...`);
//todos os numeros inteiros com excessão do zero
console.log(!!3);
console.log(!!-1);
console.log(!!" ");
console.log(!!"qualquer texto que não contenha um booleano");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);


//tipos que poder ser eventualmente convertidos para falsos
console.log(`Valores falsos...`);
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);


//esses valores podem ser convertidos e usados em operações que exigem valores lógicos
//ex: operadores logicos
let nome = "";
//como o nome é uma string vazia ele irá ser convertido para false,
//a string "Desconhecido" será convertido para true
//a operação irá retornar o primeiro valor true que achar
console.log(nome || "Desconhecido");

nome = "Herbert";
console.log(nome || "Desconhecido");
//a operação acima é uma maneira de definir um valor padrão para uma variavel
//sempre que ela não possuir um valor valido
