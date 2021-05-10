//os dois referenciam a instancia do mesmo objeto module.exports
const contadorA = require("./instanciaUnica");
const contadorB = require("./instanciaUnica");

//os dois referenciam dois objetos diferentes retornado pela 
//função factory contida em module.exports
const contadorC = require("./instanciaNova")();
const contadorD = require("./instanciaNova")();

contadorA.inc();
contadorA.inc();
console.log(contadorA.valor, contadorB.valor);

contadorC.inc();
contadorC.inc();
console.log(contadorC.valor, contadorD.valor);

