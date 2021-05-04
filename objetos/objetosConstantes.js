//a constante pesso recebe o endereço de memória onde o objeto está armazenado 
//quando alteramos o objeto não estamos alterando a constante, pois o real valor da const
//é só a referencia de onde o objeto está armazenado
const pessoa = { nome: "João" };
pessoa.nome = "Pedro";
console.log(pessoa);

//aqui ocorrerá um erro pois iremos tentar alterar o valor de const pessoa, aqui
//iremos tentar armazenar em pessoa uma nova referencia para um outro objeto
// pessoa = { nome: "Ana" };

//um objeto congelado não pode ser alterado 
Object.freeze(pessoa);

pessoa.nome = "Maria";
pessoa.endereco = "Rua sem saida";
delete pessoa.nome;
console.log(pessoa);

//criando um objeto que alem da constante com sua referencia ele também seja constante
//nem a referencia pode ser mudada, nem o objeto para qual o endereço de armazenamento ela aponta 
const pessoaConstante = Object.freeze({nome: "Maria"});
console.log(pessoaConstante);
