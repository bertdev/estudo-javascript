//acessando as propriedades dos ourtos dois modulos(A e B)

//o que foi exportado nos modulos será associado a suas respectivas constantes 
const moduloA = require("./moduloA");
const moduloB = require("./moduloB");

console.log(moduloB.boaNoite());
console.log(moduloA.ola);
console.log(moduloA, moduloB);

