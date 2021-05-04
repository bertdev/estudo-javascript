//algumas funções importantes presentes no objeto 

const pessoa = {
  nome: "Herbert",
  idade: 20,
  peso: 222,
};

console.log(Object.keys(pessoa));//retorna todas as chaves no objeto de parametro em forma de array
console.log(Object.values(pessoa));//retorna todos os valores do objeto de parametro em forma de array
console.log(Object.entries(pessoa));//retorna todos os registros, lista com as chaves e os valores em forma de array
//podemos percorrer os arrays
Object.entries(pessoa).forEach(([chave, valor]) => console.log(`${chave}: ${valor}`));

//definindo uma propriedade de um objeto com o metodo, o que permite definir algumas caracteristicas 
//de um proprieddade
Object.defineProperty(pessoa, "dataNascimento", {
  enumerable: true,//indica que essa prop é listada em keys
  writable: false,//indica que essa prop pode ser alterada
  value: "01/02/2021"//indica o valor da propriedade
});

console.log(pessoa);

//adicionada com o ecmaScript2015:
const dest = { a: 1 };
const o1 = { b: 2 };
const o3 = { c: 3, d: 4 };
const obj = Object.assign(dest, o1, o3);
//o primeiro objeto passado será o objeto destino, ele receberar as propriedades dos objetos passados como parametro 
//após o objeto destino, se existirem propriedades com o mesmo nome no objeto destino
//os valores delas serão sobrescrevidos
console.log(dest);
console.log(obj);

