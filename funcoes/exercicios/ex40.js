//uma função que recebe um array de notas e as substitui por conceitos
//0 até 4.9 = D, 5 até 6.9 = C, 7 até 8.9 = B, 9 até 10 = A

function processaNotas(notas) {
  notas.forEach(element => {
    if(element >= 0 && element < 5) {
      notas[notas.indexOf(element)] = "D";
    } else if(element >= 5 && element < 7) {
      notas[notas.indexOf(element)] = "C";
    } else if(element >= 7 && element < 9) {
      notas[notas.indexOf(element)] = "B";
    } else if(element >= 9 && element <= 10) {
      notas[notas.indexOf(element)] = "A"
    };
  });
  console.log(notas)
};

processaNotas([3, 5, 8, 10]);