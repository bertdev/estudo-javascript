let numero = 1;
{
  let numero = 2;
  console.log(`dentro = ${numero}`);
}

//Uma vez que let possui escopo de bloco, quando acessamos a variavel numero dentro do bloco
//acessamos a declarada com let, quando acessamos fora do bloco, acessamos a declarada com var
console.log(`fora = ${numero}`);
