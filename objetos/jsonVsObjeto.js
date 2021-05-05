//as diferenças de json e objeto
//json é um formato de dados muito usado para ineteroperabilidade de sistemas

const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c; } };
console.log(JSON.stringify(obj));//irá converter o objeto para json mas a função não será convertida
//pois json é um formato para compartilhamento de dados 

console.log(JSON.parse('{ "a": 1, "b": 3 }'));//convertendo um json para objeto 

