//funciona como um encadeamento de if's verificanado algumas condições 

Number.prototype.entre = function(inicio, fim) {
  return this >= inicio && this <= fim;
};

const imprimirResultado = nota => {
  if(nota.entre(9, 10)) {
    console.log(`Quadro de honra com nota ${nota}`);
  } else if(nota.entre(7, 8.99)) {
    console.log(`Aprovado com nota ${nota}`);
  } else if(nota.entre(4, 6.99)) {
    console.log(`Recuperação com nota ${nota}`);
  } else if(nota.entre(0, 3.99)) {
    console.log(`Reprovado com nota ${nota}`);
  } else {
    console.log(`${nota} É uma nota invalida`);
  };
};

imprimirResultado(9);
imprimirResultado(7);
imprimirResultado(5);
imprimirResultado(3);
imprimirResultado(19);