// Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
// array recebido como parâmetro.

const onlyNumbers = element => Number.isInteger(element);
const filtrarNumeros = arrayBase => arrayBase.filter(onlyNumbers);

console.log(filtrarNumeros(["opa", 13, "2", 5, true]));
