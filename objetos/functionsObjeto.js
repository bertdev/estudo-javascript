//algumas funções importantes presentes no objeto 

const pessoa = {
  nome: "Herbert",
  idade: 20,
  peso: 222,
};

console.log(Object.keys(pessoa));//retorna todas as chaves no objeto de parametro
console.log(Object.values(pessoa));//retorna todos os valores do objeto de parametro
console.log(Object.entries(pessoa));//retorna todos os registros, lista com as chaves e os valores
//podemos percorrer os arrays 
Object.entries(pessoa).forEach(([chave, valor]) => console.log(`${chave}: ${valor}`));

//definindo uma propriedade de um objeto com o metodo, o que permite definir algumas caracteristicas 
//de um proprieddade
Object.defineProperty(pessoa, "dataNascimento", {
  enumerable: true,
  writable: false,
  value: "01/02/2021"
});

console.log(pessoa);