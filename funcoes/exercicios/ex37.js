//criar duas funçoes uma para progreção aritmetica e outra geometrica
//parametros: n(numeo de termo), a1(termo inicial), r(razão)
//imprime o n termos e soma dos elementos 

const progrecaoGeometrica = (n, a1, r) => {
  let termos = [];
  let somatorio = 0;
  for(let i = 1; i <= n; i++) {
    let termoAtual = a1 * (r ** (i - 1));
    termos.push(termoAtual);
    somatorio += termoAtual;
  };

  console.log(`os termos da pg são: ${termos}, e a somatorio é: ${somatorio}`);
}

const progrecaoAritmetica = (n, a1, r) => {
  let termos = [];
  let somatorio = 0;
  for(let i = 1; i <= n; i++) {
    let termoAtual = a1 + (i - 1) * r;
    termos.push(termoAtual);
    somatorio += termoAtual;
  };

  console.log(`os termos da pa são: ${termos}, e o somatorio é: ${somatorio}`);
};

progrecaoGeometrica(5, 2, 2);
progrecaoAritmetica(5, 2, 2);