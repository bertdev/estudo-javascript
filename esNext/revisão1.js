//revisando um pouco do que já aprendi/estudei sobre essas funcionalidades 
//let e const 
{
  var a = 2;
  let b = 3;
  console.log(b);
}
console.log(a);
//console.log(b);

//template string
const produto = "ipad";
console.log(`${produto} é caro!`);

//destructuring
const [l, e, ...tras] = "herbert";
console.log(l, e, tras);

const [x, y, , z] = [1, 2, 3, 4, 5];
console.log(x, y, z);

const {idade: i, nome} = {nome: "herbert", idade: 20};
console.log(i, nome);

