//operador destructor trabalhando com objetos {}
//permite a desestruturação de alguma estrutura de dados, para recuperarmos 
//dados vindos(atributos, metodos, etc...) das mesmas 

const pessoa = {
  nome: "herbert",
  idade: 20,
  endereco: {
    logradouro: "Rua sem nome",
    numero: 200
  }
};

//desestruturando o objeto pessoa, recuperando as própriedades nome e idade
//e atribuindo elas a constantes de mesmo nome
const { nome, idade } = pessoa;
console.log(pessoa);
console.log(nome);
console.log(idade);

//desestruturação colocando outro nome nas variaveis geradas 
const { nome: nomePessoa, idade: idadePessoa } = pessoa;
console.log(nomePessoa);
console.log(idadePessoa);

//desestruturando propriedades que não existem no objeto(irá retornar undefined)
//colocando valor padrão caso não existam no objeto
const { sobrenome, peso = 50 } = pessoa;
console.log(sobrenome);
console.log(peso);

//desestruturando propriedade de um objeto dentro de outro objeto
const { endereco : { logradouro, numero } } = pessoa;
console.log(logradouro);
console.log(numero);