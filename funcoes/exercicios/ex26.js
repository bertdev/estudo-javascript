//fazer um algoritmo que encontra todos os pares etre 0 e 100

const numerosPares = () => {
  let pares = [];
  for(let i = 1; i <= 100; i++) {
    if(i % 2 == 0) {
      pares.push(i);
    };
  };
  console.log(`os pares entre 1 e 100 são: ${pares}`);
};

numerosPares();
