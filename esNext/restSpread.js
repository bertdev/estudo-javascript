//dependendo do contexto o mesmo operador pode ser usado para "espalhar"(spread) ou para "agrupar"(rest)
//
//usar o rest

function total(...numeros) {
  let total = 0;
  numeros.forEach(n => total += n);
  return total;
};

console.log(total(2, 3, 5));

//usar o spread com objeto
const funcionario = { nome: "maria", salario: 2000 };
const clone = { ativo: true, ...funcionario };
console.log(funcionario, clone);

//usar spread com array
const grupoA = ["joão", "pedro", "gabriel"];
const grupoFinal = ["maria", "raphael", ...grupoA];
console.log(grupoA, grupoFinal);

