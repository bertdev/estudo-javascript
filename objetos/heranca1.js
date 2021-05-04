//herança é o pilar de OOP que permite que um objeto filho receba atributos e comportamentos de um objeto pai
//permitindo assim o reuso maior de código, a herança em js é baseada em prototype 
//o prototype é como uma referencia de quem é o objeto pai daquele objeto especifico, quando tentamos 
//acessar uma propriedade desse objeto e ela não é encontrada, usamos essa referencia para o objeto pai
//para realizarmos a busca nesse objeto referenciado, assim subindo na cádeia de heranças 

const ferrari = {
  modelo: "F40",
  velMax: 324
};

const volvo = {
  modelo: "V40",
  velMax: 220
};

//acessando o prototype desse objeto
console.log(ferrari.__proto__);
console.log(ferrari.__proto__ === Object.prototype);//por padrão o prototype de um objeto criado de forma literal aponta para object.prototype
//a proriedade prototype, só está presente em funções
console.log(volvo.__proto__ === Object.prototype);
console.log(volvo.__proto__ === ferrari.__proto__); 
console.log(Object.prototype.__proto__);//Object.prototype não possui um prototype acima dele 
console.log(typeof Object);

function MeuObj() {};
console.log(typeof MeuObj);
console.log(MeuObj.prototype);

//o protótipo de um objeto é a referencia que indica o seu objeto pai

