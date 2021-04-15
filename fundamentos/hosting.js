console.log(`a = ${a}`);

var a = 2;

console.log(`a = ${a}`);

//Uma variavel declarada com var sofre hosting(içamento), o interpretador iça a sua declaração
//o que acontece com o codígo acima seria mais ou menos isso:
// var a;
// console.log(`a = ${a}`);
// a = 2;
// console.log(`a = ${a}`);

//Mais exemplos:

function teste() {
  console.log(`b = ${b}`);
  var b = 2;
  console.log(`b = ${b}`);
}

teste();
