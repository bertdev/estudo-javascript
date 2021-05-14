//estamos falando da estrutura map e não do metodo 
//
const tecnologias = new Map();
tecnologias.set("react", {framework: false});
tecnologias.set("angular", {framework: true});

console.log(tecnologias);
console.log(tecnologias.get("react"));
console.log(tecnologias.get("react").framework);

const chavesVariadas = new Map([
  [function() {}, "função"],
  [{}, "objeto"],
  [123, "numero"]
]);

console.log(chavesVariadas);
//has diz se o elemento está ou não contido no map
console.log(chavesVariadas.has(123));
chavesVariadas.delete({});
console.log(chavesVariadas.has({}));
//diz quantos elementos o map possui
console.log(chavesVariadas.size);
//obs: map não permite repetição de chaves 
//
