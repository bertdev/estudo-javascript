//entendendo um pouco do conceito de null e undefined
const a = {nome: "teste"};
//a constante a não contem o objeto e sim a referencia do endereço de memoria
//onde o objeto está armazenado, a contante b recebe esse mesmo endereço
const b = a;
b.nome = "opa";
//o objeto vai sofrer alteração pois nenhuma das variaveis o armazena, mas sim
//o endereço de memoria onde o mesmo se encontra, isso é atribuição por referencia
//as duas constantes acessam o mesmo objeto
console.log(a);

let c = 3;
let d = c;
d++;
//por 3 ser um valor de um tipo primitivo do js - number - a atribuição que vai ocorrer
//é a atribuição por valor, cada variavel vai armazenar seu proprio exemplar do valor atribuido
//podendo uma alterar sem influenciar na outra, pois seus valores se tornam independentes 
console.log(d);
console.log(c);
