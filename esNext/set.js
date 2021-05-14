//mais uma nova estrutura adicionada, uma estrutura de conjunto, não indexada
//que não aceita indexão, nem repetição 
//
const times = new Set();
times.add("Vasco");
times.add("São paulo").add("Palmeiras");
times.add("Flamengo");
times.add("Vasco");

console.log(times);
console.log(times.size);
console.log(times.has("Vasco"), times.has("vasco"));
times.delete("São paulo");
console.log(times);

const nome = ["Raquel", "Lucas", "Julia", "Raquel"];
const setNomes = new Set(nome);
console.log(setNomes);

