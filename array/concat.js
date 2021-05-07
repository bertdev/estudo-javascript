//a do concat é que você consiga concatenar elemetos passados como parametro

const filhas = ["Waleska", "Sibalena"];
const filhos = ["Washinton", "Weslley"];
const todos = filhas.concat(filhos, "fulano");
console.log(todos, filhas, filhos);

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]));

