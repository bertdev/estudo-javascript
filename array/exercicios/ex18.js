// Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão
// deverá ser de duas casas decimais, arredondando se necessário

function areaDoTriangulo(altura, base) {
  const area = (altura * base) / 2;
  return area.toFixed(2);
};

console.log(areaDoTriangulo(10, 15));
console.log(areaDoTriangulo(7, 9));
