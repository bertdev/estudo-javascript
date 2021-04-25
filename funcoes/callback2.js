//entendendo a diferença entre realizar a mesma função com e sem callback
//para entender os ganhos que isso tras 

const notas = [5.6, 2.4, 9.8, 7.5, 4.4, 10, 8];

//sem callback
let notasBaixas = [];
for(let i in notas) {
  if (notas[i] < 7) {
    notasBaixas.push(notas[i]);
  };
};

console.log(notasBaixas);

//com callback
notasBaixas = notas.filter(nota => nota < 7 ? true : false);
//obs: como a operação nota < 7 retorna um booleano, se tratando de um filter poderiamos retornar
//o proprio valor resultante dessa operação relacional 
// notasBaixas = nota.filter(nota => nota < 7);
console.log(notasBaixas);

//caso a arrow esteja um pouco confusa 
// notasBaixas = notas.filter(nota => {
//   if(nota < 7) {
//     return true;
//   }
//   return false;//podemos omitir esse, será retornado undefined que pode ser convertido para false
// });
// 
//ou 
// 
// notasBaixas = notas.filter(function (nota) {
//   return nota < 7;
// });