//adicinada no ecmascript 2015 tem duas principais caracteristicas
//sintaxe mais curta e this constante(sempre associado ao contexto que ela foi escrita)

//uma função anonima normal
let dobro = function (a) {
  return a * 2;
};

//a meesma função arrow(arrow sempre é uma função anonima)
dobro = (a) => {
  return a * 2;
};

//como existe só um patametro podemos omitir os parenteses
//como existe apenas uma sentença de código podemos omitir o corpo da funçao e
//realizar return implicito(omitir o comando return)
dobro = a => a * 2;

console.log(dobro(3));

//arrow functions são bem utilizadas quando queremos criar funções com ações
//bem especificas, favorecendo o seu reuso, tornando o código mais funcionais

//outro exemplo
let ola = function () {
  return "ola!";
};

//refatorando: 
ola = () => "ola!";

console.log(ola());

