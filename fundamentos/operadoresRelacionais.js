//operadores relacionais também são considerados operadores binarios 

//obs: o resultado de uma operação relacional sempre será true ou false

//operador de igual ==, irá comparar os valores sem levar em consideração os seus tipos
console.log("01)", "1" == 1);

//operador de estritamente igual ===, irá comparar os valores e os tipos 
console.log("02)", "1" === 1);

//operador de diferente !=, irá comparar os valores sem levar em consideração o tipo
console.log("03)", "3" != 3);

//operador de estritamente diferente !==, irá comparar os valores e os tipos(se algum deles for diferente retorna true)
console.log("04)", "3" !== 3);

//operador menor que <
console.log("05)", 4 < 2);

//operador maior que >
console.log("06)", 4 > 2);

//operador menor que ou igual <=
console.log("07)", 4 <= 2);

//operador maior que ou igual >=
console.log("08)", 4 >= 2);

//o parametro 0 representa a data de referencia do js 1 de janeiro de 1970
const data = new Date(0);
const data2 = new Date(0);
console.log("09)", data === data2);

console.log("10)", data.getTime() === data2.getTime());

console.log("11)", undefined == null);
console.log("12)", undefined === null);