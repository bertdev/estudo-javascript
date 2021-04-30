//uma função que recebe 2 numeros de parametro, deve imprimir os numeros impares que existam entre eles

const imprimeImpares = (numero1, numero2) => {
  if(numero1 > numero2) {
    for(let i = numero2; i <= numero1; i++) {
      if(i % 2 != 0) {
        console.log(i);
      };
    };
  } else if(numero2 > numero1) {
    for(let i = numero1; i <= numero2; i++) {
      if(i % 2 != 0) {
        console.log(i);
      };
    };
  } else {
    if(numero1 % 2 == 0) {
      console.log("os dois numeros são iguais não são impares");
    } else {
      console.log("os dois numeros são iguais e impares");
    };
  };
};

imprimeImpares(20, 1);