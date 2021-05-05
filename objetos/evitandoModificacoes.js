//formas de restringir um pouco a flexibilidade e dinamica de objetos 

//previnir a adição de atributos 
const produto = Object.preventExtensions({
  nome: "qualquer", preco: 1.99, tag: "promoção"
});

console.log("Extensivel:", Object.isExtensible(produto));

produto.nome = "Borracha";
produto.descricao = "Borracha escolar branca";
delete produto.tag;
console.log(produto);//os atributos do produto podem ser alterados, deletados mas não podem ser adicionados 

//previnir adição e remoção de atributos
const pessoa = { nome: "Julia", idade: 13 };
Object.seal(pessoa);
console.log("Selado: ", Object.isSealed(pessoa));

pessoa.sobrenome = "Opaa";
delete pessoa.nome;
pessoa.idade = 29;
console.log(pessoa);

//previnir todo tipo de modificação 
Object.freeze();

