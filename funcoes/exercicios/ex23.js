//recebe o código de um aluno, três notas.
//calcula a media ponderada do aluno usando peso 4 para a maior e 3 para as restantes
//mostre o código do aluno, as 3 notas, a media calculada e aprovado se o aluno tiver media
//maior ou igual a 5 e reprovado caso seja menor. 

const caculaResultadoAluno = (codigoAluno, nota1, nota2, nota3) => {
  if(codigoAluno < 0) {
    console.log("O código do aluno é invalido");
  } else {
    let media = calculaMediaPonderada(nota1, nota2, nota3);
    console.log(`O aluno ${codigoAluno}, teve notas: ${nota1}, ${nota2}, ${nota3}; com media de: ${media}; se encontra: ${media >= 5 ? 'aprovado': 'reprovado'}`);
  };
};

const calculaMediaPonderada = (...notas) => {
  notas.sort((a, b) => a > b ? 1 : -1);
  let media = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3) / (4 + 3 + 3);
  return media.toFixed(2);
};

caculaResultadoAluno(100, 10, 4, 5.3);

