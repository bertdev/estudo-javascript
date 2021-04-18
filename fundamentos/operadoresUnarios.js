//operadores unarios atuam em um unico operando
let num1 = 1;
let num2 = 2;

//operador unário de incremento ++ (adiciona 1 unidade no valor do operando)
//se o operador vinher no final do operando é posfix, se vinher antes é prefix
//operador binarios são infix
num1++;
console.log(num1);

//operdor unário de decremento -- (subtrai 1 unidadde no valor do operando)
--num1;
console.log(num1);

//operadores prefix tem precedencia maior que os posfix

console.log(++num1 === num2--);
//o incremento prefix ocorre antes da comparação, ocorre a comparação e só dps ocorre o decremento posfix
console.log(num1 === num2);

