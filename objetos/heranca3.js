//usando object.create
const pai = { nome: "Pedro", corCabelo: "preto" };

const filha = Object.create(pai);//criará um objeto com pai como prototype
filha.nome = "Ana";
console.log(filha.corCabelo);

//o primeiro parametro é o objeto de prototype, o segundo é o objeto com os atributos
//desse novo objeto que será criado
const filha2 = Object.create(pai, {
  nome: { value: "Bia", writable: false, enumerable: true },
});

console.log(filha2.nome);
console.log(Object.keys(filha), Object.keys(filha2));

//os atributos "herdados" por prototype podem ser percorridos por for/in
for(let key in filha2){
  console.log(key);
};
//verificar se a propriedade que está sendo percorrida pertece ao objeto ou é herdada
for(let key in filha2) {
  filha2.hasOwnProperty(key) ? 
				console.log(key) : console.log(`por herança: ${key}`);
};
